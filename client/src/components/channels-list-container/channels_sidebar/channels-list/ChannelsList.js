import React from 'react';

import '../../../../styles/ChannelsList.scss';

const renderList = () => {
  // TODO: map it from props
  const channels = ['Disney', 'Star Wars', 'NBA Jam', 'Studio 52', 'TNT', 'NFL Football'];

  return (
    channels.map((channel, idx) => {
      return (
        <div key={idx} className="sidebar_btn_wrapper ">
          <div key={idx} className="sidebar_channel_messages">
          <span key={idx} className="sidebar_icon">#</span>{channel}</div>
        </div>
      );
    })
  )
}

const ChannelsList = () => {
  return (
    <div className="sidebar_list_container">
      <div className="sidebar_title">Channels</div>
      {renderList()}
    </div>
  );
}

export default ChannelsList;