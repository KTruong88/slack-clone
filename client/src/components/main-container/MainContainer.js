import React, { useState } from 'react';

import ChannelHeader from './header/ChannelHeader';
import MessagesContainer from './messages-container/MessagesContainer';

import '../../styles/MainContainer.scss';

const MainContainer = () => {
  const [state, setState] = useState({});

  return (
    <div className="main_container">
      <ChannelHeader></ChannelHeader>
      <MessagesContainer></MessagesContainer>
    </div>
  );
}

export default MainContainer;