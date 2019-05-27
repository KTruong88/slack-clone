import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import ChannelsListContainer from './components/channels-list-container/ChannelsListContainer';
import MainContainer from './components/main-container/MainContainer';
import './styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app_container">
        <Route exact path='/' component={ChannelsListContainer} />
        <Route exact path='/' component={MainContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
