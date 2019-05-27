import React from 'react';

import Messages from './messages/Messages';
import { connect } from 'react-redux';

import '../../../styles/MessagesContainer.scss';

const MessagesContainer = () => {
  return (
    <div className="client_body">
      <div className="date_pill">Today</div>
      <Messages />
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

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
