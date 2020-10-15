// rxjs
import {
  forkJoin,
  Observable,
  throwError
} from 'rxjs';
import {fromFetch} from 'rxjs/fetch';

import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';

// API
import {ApiData, Event} from './types';

class ArtistsApiService {
  getArtistInfo(artist: string): Observable<ApiData> {
    return fromFetch(`https://rest.bandsintown.com/artists/${artist}?app_id=1`).pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return throwError({error: true, message: `Error ${response.status}`});
        }
      }),
      catchError(err => {
        console.error(err);
        return throwError({error: true, message: err.message})
      })
    ) as Observable<ApiData>;
  }

  getArtistEvents(artistName: string): Observable<Array<Event>> {
    return fromFetch(`https://rest.bandsintown.com/artists/${artistName}/events?app_id=1`).pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return throwError({error: true, message: `Error ${response.status}`});
        }
      }),
      catchError(err => {
        console.error(err);
        return throwError({error: true, message: err.message})
      })
    ) as Observable<Array<Event>>;
  }

  getArtistEventById(artistName: string, id: string) {
    return fromFetch(`https://rest.bandsintown.com/artists/${artistName}/events?app_id=1`)
      .pipe(
        switchMap(response => {
          if (response.ok) {
            return response.json();
          } else {
            return throwError({error: true, message: `Error ${response.status}`});
          }
        }),
        map((data: Array<any>) => {
          return data.find(item => item.id === id);
        }),
        catchError(err => {
          console.error(err);
          return throwError({error: true, message: err.message})
        })
      )
  }

  getArtistAndEvents(artistName: string): Observable<ApiData> {
    return forkJoin([
        this.getArtistEvents(artistName),
        this.getArtistInfo(artistName),
      ]
    ).pipe(
      map((data: any) => {
          return {
            events: data[0],
            artist: data[1]
          }
        }
      ),

      catchError(err => {
        console.error(err);
        return throwError({error: true, message: err.message})
      })
    )
  }
}

export default new ArtistsApiService();
