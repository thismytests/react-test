import {
  EventsAction,
  EventsState
} from './events.types';

import {ActionsTypes} from './events.actions';

// default state
const defaultInitState: EventsState = {
  favouriteEvents: []
};

const addFavouriteEvent = (state: EventsState,
                           action: EventsAction): EventsState => {
  const copy: EventsState = JSON.parse(JSON.stringify(state));
  copy.favouriteEvents.push(action.payload.event);
  return copy;
};

const removeFavouriteEvent = (state: EventsState,
                              action: EventsAction): EventsState => {
  const copy: EventsState = JSON.parse(JSON.stringify(state));

  copy.favouriteEvents = state.favouriteEvents.filter((item) => {
    if (item.id !== action.payload.event.id) {
      return item;
    }
  });
  return copy;
};


export default (state: EventsState = defaultInitState,
                action: EventsAction) => {
  switch (action.type) {
    case ActionsTypes.ADD_FAVOURITE_EVENT:
      return addFavouriteEvent(state, action);

    case ActionsTypes.REMOVE_FAVOURITE_EVENT:
      return removeFavouriteEvent(state, action);

    default:
      return state;
  }
};
