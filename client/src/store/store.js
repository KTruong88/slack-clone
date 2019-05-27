import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import message from '../reducers/messageReducer';
import user from '../reducers/userReducer';
import channelsList from '../reducers/channelsListReducer';

const store = createStore(combineReducers({
  message,
  user,
  channelsList
  }), {},
  applyMiddleware(logger, thunk)
);

console.log(store.getState())

export default store;
