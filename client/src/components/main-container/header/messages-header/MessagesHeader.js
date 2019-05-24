import React from 'react';

import ChannelInfo from '../channel-info/ChannelInfo';
import '../../../../styles/MessagesHeader.scss';
import Star from '@carbon/icons-react/es/star/16';
import User from '@carbon/icons-react/es/user/16';

const MessagesHeader = () => {
  return (
    <div className="messages_header">
      <div className="channel_title">
        <div className="channel_name_container">
          <span className="channel_name">
            {/* <Locked className="icon_locked"></Locked> */}
            <img src={require('../../../../shared/icons/padlock.svg')} alt="icon of a lock by Dave Gandy" className="icon_lock"/>
            bm-jenkins-dev
          </span>
        </div>
        
        <div className="channel_header_info">
          <div className="channel_header_info_item" title="Star this channel">
            <Star className="icon_star"></Star>
          </div>
          <div className="info_separator">|</div>
          <div className="channel_header_info_item btn_member_list" title="View member list">
            <User className="icon_user"></User>
            <span className="users_count">25</span>
          </div>
          <div className="info_separator">|</div>
          <div className="channel_header_info_item btn_add_topic">
            <img src={require('../../../../shared/icons/edit.svg')} alt="icon of a lock by Slir" className="icon_edit"/>
            Add a topic
          </div>
          {/* TODO: reveal when hovering over Add a topic */}
          {/* <div className="channel_header_info_item btn_add_topic">
            Edit
          </div> */}
        </div>
      </div>
      <ChannelInfo></ChannelInfo>
    </div>
  );
}

export default MessagesHeader;