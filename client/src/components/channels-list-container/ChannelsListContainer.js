import React from 'react';

import ChannelsListHeader from './channels-list-header/ChannelsListHeader';
import ChannelsSidebar from './channels_sidebar/ChannelsSidebar';
import { setCurrentChannel } from '../../actions/channelsListActions';
import { setNewMessages } from '../../actions/messageActions';

import { connect } from 'react-redux';

import '../../styles/ChannelsListContainer.scss';

const ChannelsListContainer = (props) => {
  return (
    <div className="channels_container">
      <ChannelsListHeader />
      <ChannelsSidebar 
        channels={props.channelsList.channels}
        currentChannel={props.channelsList.currentChannel}
        setCurrentChannel={props.setCurrentChannel}
        setNewMessages={props.setNewMessages}
        />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    channelsList: state.channelsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChannel: (channel) => {
      dispatch(setCurrentChannel(channel));
    },
    setNewMessages: (channelMessages) => {
      dispatch(setNewMessages(channelMessages));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsListContainer);
