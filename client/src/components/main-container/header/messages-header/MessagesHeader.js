import React from 'react';

import ChannelInfo from './channel-info/ChannelInfo';
import '../../../../styles/MessagesHeader.scss';
import Star from '@carbon/icons-react/es/star/16';
import User from '@carbon/icons-react/es/user/16';

const MessagesHeader = (props) => {
  const currentChannel = props.currentChannel.name;

  return (
    <div className="messages_header">
      <div className="channel_title">
        <div className="channel_name_container">
          <span className="channel_name">
            <img src={require('../../../../shared/icons/misc/padlock.svg')} alt="icon of a lock by Dave Gandy" className="icon_lock"/>
            {currentChannel}
          </span>
        </div>
        
        <div className="channel_header_info">
          <div className="channel_header_info_item" title="Star this channel">
            <Star className="icon_star" />
          </div>
          <div className="info_separator">|</div>
          <div className="channel_header_info_item btn_member_list" title="View member list">
            <User className="icon_user" />
            <span className="users_count">{props.currentChannel.membersCount}</span>
          </div>
          <div className="info_separator">|</div>
          <div className="channel_header_info_item btn_add_topic">
            <img src={require('../../../../shared/icons/misc/edit.svg')} alt="icon of a lock by Slir" className="icon_edit"/>
            Add a topic
          </div>
        </div>
      </div>
      <ChannelInfo />
    </div>
  );
};

export default MessagesHeader;
