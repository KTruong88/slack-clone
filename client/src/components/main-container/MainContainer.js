import React from 'react';

import ChannelHeader from './header/ChannelHeader';
import MessagesContainer from './messages-container/MessagesContainer';
import Footer from './footer/footer';

import { connect } from 'react-redux';


import '../../styles/MainContainer.scss';

const MainContainer = (props) => {
  return (
    <div className="main_container">
      <ChannelHeader currentChannel={props.channels.currentChannel} />
      <MessagesContainer messages={props.messages} />
      <Footer currentChannel={props.channels.currentChannel} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    channels: state.channelsList,
    messages: state.messages
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
