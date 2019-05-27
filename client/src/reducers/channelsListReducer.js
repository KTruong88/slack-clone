import React from 'react';

const initialState = [
  'disney', 'star wars: the empire strikes back', 'nba jam', 'studio 52', 'tnt', 'nfl football'
];

const channelsList = (state = initialState, action) => {
  // switch (action.type) {
  //   case 'SET_MSG_IMG':
  //     state = {
  //       ...state,
  //       name: action.payload
  //     }
  //     break;
  //   case 'SET_MSG_SENDER':
  //     state = {
  //       ...state,
  //       name: action.payload
  //     }
  //     break;
  //   case 'SET_MSG_BODY':
  //     state = {
  //       ...state,
  //       name: action.payload
  //     }
  //     break;
  //   case 'SET_MSG_TIMESTAMP':
  //     state = {
  //       ...state,
  //       name: action.payload
  //     }
  //     break;
  // }
  return state;
};

export default channelsList;
