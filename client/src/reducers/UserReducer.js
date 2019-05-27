const initialState = {
  name: 'Kevin Truong',
  age: 30
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
        // lastValues: [...state.lastValues, action.payload]
      }
      break;
  }
  return state;
};

export default user;