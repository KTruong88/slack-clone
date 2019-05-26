import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import UserReducer from '../reducers/UserReducer';

const store = createStore(combineReducers({
    UserReducer
  }), {},
  applyMiddleware(logger)
);

export default store;
