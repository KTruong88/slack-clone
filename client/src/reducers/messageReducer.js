const initialState = {
 
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MSG_IMG':
      state = {
        ...state,
        name: action.payload
      }
      break;
    case 'SET_MSG_SENDER':
      state = {
        ...state,
        name: action.payload
      }
      break;
    case 'SET_MSG_BODY':
      state = {
        ...state,
        name: action.payload
      }
      break;
    case 'SET_MSG_TIMESTAMP':
      state = {
        ...state,
        name: action.payload
      }
      break;

    default: break;
  }
  return state;
};

export default message;
