import React from 'react';

import '../../../../styles/ChannelsList.scss';

const renderList = (channels) => {
  return (
    // TODO: change key from index to a unique id for performance
    channels.map((channel, idx) => {
      return (
        <div key={idx} className="sidebar_btn_wrapper ">
          <div key={idx} className="sidebar_channel_messages overflow_ellipsis">
          <span key={idx} className="sidebar_icon">#</span>{channel}</div>
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
