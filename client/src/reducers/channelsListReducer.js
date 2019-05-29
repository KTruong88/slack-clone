const initialState = {
  channels: [
    { id: 1, name: 'disney' },
    { id: 2, name: 'star wars: the empire strikes back' },
    { id: 3, name: 'sports' },
    { id: 4, name: 'cool peeps' },
    { id: 5, name: 'pokemon' }
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
      
    default: break;
  }
  return state;
};

export default channelsList;
