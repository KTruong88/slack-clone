import React from 'react';

import ChannelsList from './channels-list/ChannelsList';
import DirectMessages from './direct-messages/DirectMessages';

import '../../../styles/ChannelsSidebar.scss';
import Menu from '@carbon/icons-react/es/menu/16';
import Chat from '@carbon/icons-react/es/chat/16';

const ChannelsSidebar = () => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_btn_container">
        <div className="sidebar_jumper">
          <Menu className="icon_jump_to"></Menu>
          <div>Jump to...</div>
        </div>
      </div>
      <div className="sidebar_btn_unread">
        <Menu className="sidebar_btn"></Menu>
        <div>All Unreads</div>
      </div>
      <div className="sidebar_btn_unread">
        <Chat className="sidebar_btn"></Chat>
        <div>Threads</div>
      </div>
      <ChannelsList></ChannelsList>
      <DirectMessages></DirectMessages>
    </div>
  );
}

export default ChannelsSidebar;