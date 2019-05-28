import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import messages from '../reducers/messageReducer';
import user from '../reducers/userReducer';
import channelsList from '../reducers/channelsListReducer';

const store = createStore(combineReducers({
  messages,
  user,
  channelsList
  }), {},
  applyMiddleware(logger, thunk)
);

console.log(store.getState())

export default store;
