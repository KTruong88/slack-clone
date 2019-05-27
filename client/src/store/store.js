import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import message from '../reducers/messageReducer';
import user from '../reducers/userReducer';

const store = createStore(combineReducers({
  message,
  user
  }), {},
  applyMiddleware(logger, thunk)
);

console.log(store.getState())

export default store;
