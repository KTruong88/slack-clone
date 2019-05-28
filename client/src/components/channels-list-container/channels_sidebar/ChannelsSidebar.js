import React from 'react';

import ChannelsList from './channels-list/ChannelsList';
import DirectMessages from './direct-messages/DirectMessages';

import '../../../styles/ChannelsSidebar.scss';
import Menu from '@carbon/icons-react/es/menu/16';
import Chat from '@carbon/icons-react/es/chat/16';

const ChannelsSidebar = (props) => {
  return (
    <div className="sidebar_container">
      <div className="sidebar_btn_container">
        <div className="sidebar_jumper">
          <Menu className="icon_jump_to" />
          <div>Jump to...</div>
        </div>
      </div>
      <div className="sidebar_btn_unread">
        <Menu className="sidebar_btn" />
        <div>All Unreads</div>
      </div>
      <div className="sidebar_btn_unread">
        <Chat className="sidebar_btn" />
        <div>Threads</div>
      </div>
      <ChannelsList
        channels={props.channels}
        currentChannel={props.currentChannel}
        setCurrentChannel={props.setCurrentChannel}
        />
      <DirectMessages />
    </div>
  );
};

export default ChannelsSidebar;