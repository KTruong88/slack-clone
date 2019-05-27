import React from 'react';

import '../../../../styles/ChannelsList.scss';

const renderList = (channels) => {
  return (
    channels.map(channel => {
      return (
        <div key={channel.id} className="sidebar_btn_wrapper ">
          <div key={channel.id} className="sidebar_channel_messages overflow_ellipsis">
          <span key={channel.id} className="sidebar_icon">#</span>{channel.name}</div>
        </div>
      );
    })
  );
};

const ChannelsList = (props) => {
  return (
    <div className="sidebar_list_container">
      <div className="sidebar_title">Channels</div>
      {renderList(props.channels)}
    </div>
  );
};

export default ChannelsList;
