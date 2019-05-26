import React, { useState } from 'react';

import ChannelHeader from './header/ChannelHeader';
import MessagesContainer from './messages-container/MessagesContainer';
import Footer from './footer/footer';

import '../../styles/MainContainer.scss';

const MainContainer = () => {
  const [state, setState] = useState({});

  return (
    <div className="main_container">
      <ChannelHeader />
      <MessagesContainer />
      <Footer />
    </div>
  );
}

export default MainContainer;