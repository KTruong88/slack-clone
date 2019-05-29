const initialState = {
  channels: [
    { id: 1, name: 'disney', membersCount: 12 },
    { id: 2, name: 'star wars: the empire strikes back', membersCount: 16 },
    { id: 3, name: 'sports', membersCount: 8 },
    { id: 4, name: 'cool peeps', membersCount: 21 },
    { id: 5, name: 'pokemon', membersCount: 150 }
  ],
  currentChannel: { id: 1, name: 'disney', membersCount: 12 }
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
