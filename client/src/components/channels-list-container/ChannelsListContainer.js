import React, { useState } from 'react';

import ChannelsListHeader from './channels-list-header/ChannelsListHeader';
import ChannelsSidebar from './channels_sidebar/ChannelsSidebar';
import { setName } from '../../actions/userActions';

import { connect } from 'react-redux';

import '../../styles/ChannelsListContainer.scss';

const ChannelsListContainer = (props) => {
  return (
    <div className="channels_container">
      <ChannelsListHeader />
      <ChannelsSidebar />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsListContainer);
