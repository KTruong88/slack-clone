import React, { useState } from 'react';

import ChannelsListHeader from './channels-list-header/ChannelsListHeader';

import '../../styles/ChannelsListContainer.scss';

const ChannelsListContainer = () => {
  return (
    <div className="channels_container">
      <ChannelsListHeader></ChannelsListHeader>
    </div>
  );
}

export default ChannelsListContainer;