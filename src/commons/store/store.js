import {
  createStore,
} from 'redux' ;
import thunk from 'redux-thunk' ;

import Reducer from './reducers' ;

// create store
const initTaskReducer = {};


export const store = createStore(Reducer,
  initTaskReducer,
  // middleware
  //
  // todo ... will be discussed
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
