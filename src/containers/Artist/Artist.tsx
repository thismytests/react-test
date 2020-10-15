import React, {useState, useEffect} from 'react';

// redux
import {useSelector} from 'react-redux';
import {EventsState} from 'commons/store/events/events.types';

// @material-ui
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// components
import Events from './components/Events';
import Favourites from './components/Favourites';
import ArtistDescription from './components/ArtistDescription';

// utils
import {updateUrlId} from 'commons/utils';

import {
  NavigationContextType,
  NavigationProvider
} from './navigation';

// api
import ArtistsApiService from 'commons/api/ArtistsApi';
import {ApiData} from 'commons/api/types';

// context
import {getArtistUrlValue} from './navigation.context.properties';

// styles
import {useStyles} from './Artist.styles';
import {match, RouteComponentProps} from 'react-router';


export const getArtistIdFromUrl = (matchProps: match): string => {
  const params = matchProps.params as { artist: string };
  return params.artist;
};

// todo ... will be desctruction as Vlad
export default function Artist(props: RouteComponentProps) {
  const [artistData, setArtistData] = useState<ApiData>();
  const [search, setSearch] = useState('');

  const navigationContextType: NavigationContextType = {getArtistUrlValue};

  // styles
  const classes = useStyles();

  // redux store
  const favouriteEvents = useSelector((state: {
    events: EventsState
  }) => {
    return state.events.favouriteEvents;
  });

  // susbscribers
  let subs1: any;

  /**
   * hooks*/
  useEffect(() => {
    const artist: string = getArtistIdFromUrl(props.match);

    setSearch(artist);


    subs1 = ArtistsApiService
      .getArtistAndEvents(artist)
      .subscribe((data: any) => {
        setArtistData(data);
      });
    return () => subs1.unsubscribe()
  }, [props.history.location]);

  const onFormSearch = (props: any) => (event: any) => {
    updateUrlId(props, event.target.value);
    setSearch(event.target.value);
  };
  /**
   * hooks*/

  return (
    <NavigationProvider value={navigationContextType}>
      <div className={classes.root}>

        <Grid container>
          <Grid container spacing={3}>

            {/*left side*/}
            <Grid item xs={12} md={6}>

              {/*search*/}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <form noValidate autoComplete="off">
                    <div>
                      <TextField
                        className={classes.searchInput}
                        required
                        value={search}
                        onChange={onFormSearch(props)}
                        id="standard-required"
                        margin="normal"
                      />
                    </div>
                  </form>
                </Grid>
              </Grid>


              {/*Artist Description*/}
              {artistData && (
                <Grid container spacing={3}>
                  <Grid item xs={12}>

                    <ArtistDescription
                      bandInformation={artistData.artist.name}
                      imageUrl={artistData.artist.image_url}/>
                  </Grid>
                </Grid>
              )}


              {artistData && artistData.artist && (
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    {/*Events*/}
                    <Events events={artistData.events}/>
                  </Grid>
                </Grid>
              )}


            </Grid>

            {/*right side*/}
            {favouriteEvents && favouriteEvents.length !==0 && (
              <Grid item xs={12} md={6}>
                <div>Favourite</div>
                <Grid item xs={12}>
                  {/*Events*/}
                  <Favourites events={favouriteEvents}/>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </div>
    </NavigationProvider>
  );
}
