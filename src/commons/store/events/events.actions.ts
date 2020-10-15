import {
  EventsAction,
  Event
} from './events.types';

export class ActionsTypes {
  static readonly ADD_FAVOURITE_EVENT = 'Events/ADD_FAVOURITE_EVENT';
  static readonly REMOVE_FAVOURITE_EVENT = 'Events/REMOVE_FAVOURITE_EVENT';
}


export const AddFavouriteEvent = (event: Event): EventsAction => {
  return {
    type: ActionsTypes.ADD_FAVOURITE_EVENT,
    payload: {
      event: event
    }
  };
};

export const RemoveFavouriteEvent = (event: Event): EventsAction => {
  return {
    type: ActionsTypes.REMOVE_FAVOURITE_EVENT,
    payload: {
      event: event
    }

  };

};
