import React, { useState } from 'react';

import ChannelHeader from './header/ChannelHeader';
import MessagesContainer from './messages-container/MessagesContainer';
import Footer from './footer/footer';

import { connect } from 'react-redux';


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
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
