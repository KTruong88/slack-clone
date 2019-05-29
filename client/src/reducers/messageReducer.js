const initialState = {
  messages: [
    { 
      id: 1,
      img: 'snow_white.svg',
      title: 'https://www.iconfinder.com/vectto',
      alt: 'cartoon snow white',
      path: 'disney',
      messageSender: 'Snow White',
      messageTimestamp: '9:38 AM',
      messageBody: 'You wash the dished, you tidy up the room, you clean the fireplace, and I\'ll use the broom.'
      },
    {
      id: 2,
      img: 'little_mermaid.svg',
      title: 'https://www.iconfinder.com/vectto',
      alt: 'cartoon little mermaid',
      path: 'disney',
      messageSender: 'Ariel',
      messageTimestamp: '10:45 AM',
      messageBody: 'Jasmine, I do love you, but I gotta stop pretending to be something I’m not.'
    },
    {
      id: 3,
        img: 'princess_jasmine.svg',
        title: 'https://www.iconfinder.com/vectto',
        alt: 'cartoon princess jasmine',
        path: 'disney',
        messageSender: 'Jasmine',
        messageTimestamp: '11:25 AM',
        messageBody: 'I don’t see how a world that makes such wonderful things could be bad.'
    },
    {
      id: 4,
        img: 'princess_belle.svg',
        title: 'https://www.iconfinder.com/vectto',
        alt: 'cartoon princess belle',
        path: 'disney',
        messageSender: 'Belle',
        messageTimestamp: '1:06 PM',
        messageBody: 'He\'s no monster, Gaston; you are'
    },
    {
      id: 5,
        img: 'cinderella.svg',
        title: 'https://www.iconfinder.com/vectto',
        alt: 'cartoon cinderella',
        path: 'disney',
        messageSender: 'Cinderella',
        messageTimestamp: '2:05 PM',
        messageBody: 'What’s a royal ball? After all, I suppose it would be frightfully dull, and boring, and completely… completely wonderful.'
    },
  ]
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CHANNEL_MESSAGES':
      state = {
        ...state,
        messages: action.payload
      }
      break;
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

export default messages;
