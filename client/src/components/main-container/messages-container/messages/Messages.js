import React from 'react';

import '../../../../styles/Messages.scss';

const getClassName = (currentChannel) => {
  switch (currentChannel) {
    case 'disney':
      return 'icon_disney';
    case 'star wars: the empire strikes back':
      return 'icon_starwars';
    case 'sports':
      return 'icon_sports';
    case 'cool peeps':
      return 'icon_cool_peeps';
    case 'pokemon':
      return 'icon_pokemon';
  default: break;
  }
};

const renderMessages = (messages, currentChannel) => {
  return (
    messages.map(message => {
      return (
        <div className="message_line" key={message.id}>
          <div className="message_gutter">
            <img src={require(`../../../../shared/icons/${message.path}/${message.img}`)} 
                 alt={`${message.alt}`}
                 title={`${message.title}`}
                 className={`${getClassName(currentChannel.name)}`}
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
        {renderMessages(props.messages.messages, props.currentChannel)}
      </div>
    </div>
  );
};

export default Messages;
