import React from 'react';

import MessagesHeader from './messages-header/MessagesHeader';
import FlexHeader from './flex-header/FlexHeader';

import '../../../styles/ChannelHeader.scss';

const ChannelHeader = (props) => {
  return (
    <div className="container">
      <MessagesHeader currentChannel={props.currentChannel} />
      <FlexHeader />
    </div>
  );
};

export default ChannelHeader;