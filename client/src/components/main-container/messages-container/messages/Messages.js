import React, { useState, useEffect, useRef }from 'react';

import profile from '../../../shared-components/profile';

import '../../../../styles/Messages.scss';

const Messages = (props) => {
  const node = useRef();
  const [showProfile, setProfileCard] = useState(false);
  const [profileId, setProfileId] = useState();

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const handleClickOutside = (e) => {
  //   if (!node.current.contains(e.target)) {
  //     return setProfileCard(false);
  //   }
  // };

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

  const handleProfile = (e, id) => {
    setProfileId(id);
    showProfile ? setProfileCard(false) : setProfileCard(true);
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
                  className={`portrait ${getClassName(currentChannel.name)}`}
                />
            </div>
            <div className="message_content">
              <div className="message_sender_wrap">
                <span className="message_sender"
                      ref={node}
                      onClick={(e) => handleProfile(e, message.id)}>
                      {message.messageSender}
                      {showProfile && profileId === message.id && profile()}
                </span>
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

  return (
    <div className="messages_wrap">
      <div className="message_line_container">
        {renderMessages(props.messages.messages, props.currentChannel)}
      </div>
    </div>
  );
};

export default Messages;
