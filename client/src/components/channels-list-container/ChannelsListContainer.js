import React, { useState } from 'react';

import ChannelsListHeader from './channels-list-header/ChannelsListHeader';
import ChannelsSidebar from './channels_sidebar/ChannelsSidebar';

import '../../styles/ChannelsListContainer.scss';

const ChannelsListContainer = () => {
  return (
    <div className="channels_container">
      <ChannelsListHeader></ChannelsListHeader>
      <ChannelsSidebar></ChannelsSidebar>
    </div>
  );
}

export default ChannelsListContainer;