export interface Event {
  offers: Array<{
    type: string;
    url: string;
    status: string;
  }>,
  venue: {
    name: string;
    country: string;
    region: string;
    city: string;
    latitude: number;
    longitude: number;
  },
  datetime: Date;
  on_sale_datetime: string;
  description: string;
  lineup: Array<string>;
  id: number;
  artist_id: number;
  url: string;
}

export interface EventsAction {
    type: string;
    payload: {
      event: Event
    }
}

export interface EventsState {
    favouriteEvents: Array<Event>;
}
