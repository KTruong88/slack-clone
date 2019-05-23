import React, { useState } from 'react';

import ChannelsListContainer from './components/channels-list-container/ChannelsListContainer';
import MainContainer from './components/main-container/MainContainer';
import './styles/App.scss';

const App = () => {
  return (
    <div className="app-container">
      <ChannelsListContainer></ChannelsListContainer>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
