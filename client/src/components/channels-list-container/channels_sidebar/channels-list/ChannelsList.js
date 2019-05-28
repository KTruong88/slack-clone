import React from 'react';

import '../../../../styles/ChannelsList.scss';

const setChannelBackground = (channel, currentChannel) => {
  if (channel === currentChannel) {
    return 'selected_channel';
  }
};

const renderList = (props, currentChannel) => {
  return (
    props.channels.map(channel => {
      return (
        <div key={channel.id}
             className={`${setChannelBackground(channel.name, currentChannel)} sidebar_btn_wrapper`}
          >
          <div key={channel.id}
               onClick={() => props.setCurrentChannel(channel)}
               className="sidebar_channel overflow_ellipsis">
          <span key={channel.id} className="sidebar_icon">#</span >{channel.name}</div>
        </div>
      );
    })
  );
};

const ChannelsList = (props) => {
  const currentChannel = props.currentChannel.name;
  
  return (
    <div className="sidebar_list_container">
      <div className="sidebar_title">Channels</div>
      {renderList(props, currentChannel)}
    </div>
  );
};

export default ChannelsList;
