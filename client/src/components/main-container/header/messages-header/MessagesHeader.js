import React from 'react';

import '../../../../styles/MessagesHeader.scss';
import Star from '@carbon/icons-react/es/star/16';
import User from '@carbon/icons-react/es/user/16';
import Edit from '@carbon/icons-react/es/edit/16';

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
          <div className="channel_header_info_item">
            <Star className="icon_star"></Star>
          </div>
          <div className="info_separator">|</div>
          <div className="channel_header_info_item btn_member_list">
            <User className="icon_user"></User>
            <span className="users_count">25</span>
          </div>
          <div className="info_separator">|</div>
          <div className="channel_header_info_item btn_add_topic">
            {/* <Edit className="icon_edit"></Edit> */}
            <img src={require('../../../../shared/icons/edit.svg')} alt="icon of a lock by Slir" className="icon_edit"/>
            Add a topic
          </div>
        </div>
      </div>
      <div className="channel_info"></div>
    </div>
  );
}

export default MessagesHeader;