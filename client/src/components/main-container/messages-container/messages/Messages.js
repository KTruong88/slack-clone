import React from 'react';

import '../../../../styles/Messages.scss';

const renderMessages = (messages) => {
  return (
    messages.map(message => {
      return (
        <div className="message_line" key={message.id}>
          <div className="message_gutter">
            <img src={require(`../../../../shared/icons/${message.img}`)} 
                 alt={`${message.alt}`}
                 title={`${message.title}`} 
                 className="icon_disney"
              />
          </div>
          <div className="message_content">
            <div className="message_sender">
              {message.messageSender}
              <span className="message_timestamp">{message.messageTimestamp}</span>
            </div>
            <div className="message_body">
              {message.messageBody}
            </div>
          </div>
        </div>
      );
    })
  );
};

const Messages = (props) => {
  return (
    <div className="messages_wrap">
      <div className="message_line_container">
        {renderMessages(props.messages.messages)}
      </div>
    </div>
  );
};

export default Messages;
