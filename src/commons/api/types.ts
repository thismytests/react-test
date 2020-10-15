export interface ApiData {
  artist: Artist,
  events: Array<Event>
}

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

export interface Artist {
  facebook_page_url: string
  id: string
  image_url: string
  mbid: string
  name: string
  thumb_url: string
  tracker_count: number
  upcoming_event_count: number
  url: string
}
