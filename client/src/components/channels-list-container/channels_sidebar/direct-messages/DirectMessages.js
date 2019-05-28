import React from 'react';

import Recording from '@carbon/icons-react/es/radio-button/20';
import '../../../../styles/DirectMessages.scss';

const renderDirectMessages = () => {
  // TODO: map it from props
  const users = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur', 'Ash', 'Mysty'];

  return (
    users.map((user, idx) => {
      return (
        // TODO: change key from index to a unique id for performance
        <div key={idx} className="sidebar_btn_wrapper">
          <div key={idx} className="sidebar_channel">
          <span key={idx} className="sidebar_messages_icon">
            <Recording className="icon_recording" />
          </span>{user}</div>
        </div>
      );
    })
  );
};
const DirectMessages = () => {
  return (
    <div className="sidebar_list_container">
      <div className="sidebar_title">Direct Messages</div>
      {renderDirectMessages()}
    </div>
  );
};

export default DirectMessages;