const initialState = {
  channels: [
    { id: 1, name: 'disney' },
    { id: 2, name: 'star wars: the empire strikes back' },
    { id: 3, name: 'nba jam' },
    { id: 4, name: 'studio 52' },
    { id: 5, name: 'tnt' },
    { id: 6, name: 'nfl football' },
  ],
  currentChannel: { id: 1, name: 'disney' }
};

const channelsList = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CHANNEL':
      state = {
        ...state,
      currentChannel: action.payload
      }
      break;
  }
  return state;
};

export default channelsList;
