export const setMessageImg = (img) => {
  return {
    type: 'SET_MSG_IMG',
    payload: img
  };
};

export const setMessageSender = (msg) => {
  return {
    type: 'SET_MSG_SENDER',
    payload: msg
  };
};

export const setMessageBody = (msg) => {
  return {
    type: 'SET_MSG_BODY',
    payload: msg
  };
};

export const setMessageTimeStamp = (timeStamp) => {
  return {
    type: 'SET_MSG_TIMESTAMP',
    payload: timeStamp
  };
};