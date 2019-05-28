import React from 'react';

import Messages from './messages/Messages';

import '../../../styles/MessagesContainer.scss';

const MessagesContainer = (props) => {
  return (
    <div className="client_body">
      <div className="date_pill">Today</div>
      <Messages messages={props.messages}/>
    </div>
  );
};

export default MessagesContainer;
