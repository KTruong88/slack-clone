import React from 'react';

import MessagesHeader from './messages-header/MessagesHeader';
import FlexHeader from './flex-header/FlexHeader';

import '../../../styles/ChannelHeader.scss';

const ChannelHeader = () => {
  return (
    <div className="container">
      <MessagesHeader />
      <FlexHeader />
    </div>
  );
};

export default ChannelHeader;