import React, { useEffect } from 'react';

import disneyMessages from '../../../../shared/utils/disneyMessages';
import starWarsMessages from '../../../../shared/utils/starWarsMessages';
import sportsMessages from '../../../../shared/utils/sportsMessages';
import coolPeeps from '../../../../shared/utils/coolPeeps';
import pokemon from '../../../../shared/utils/pokemon';

import AddOutline from '@carbon/icons-react/es/add/20';

import '../../../../styles/ChannelsList.scss';

const ChannelsList = (props) => {
  useEffect(() => {
    setChannelMessages(props);
  }, [props.currentChannel]);

  const currentChannel = props.currentChannel.name;

  const setChannelMessages = (props) => {
    const id = props.currentChannel.id;

    switch (id) {
      case 1:
        props.setNewMessages(disneyMessages);
        break;
      case 2:
        props.setNewMessages(starWarsMessages);
        break;
      case 3:
        props.setNewMessages(sportsMessages);
      break;
      case 4:
        props.setNewMessages(coolPeeps);
      break;
      case 5:
        props.setNewMessages(pokemon);
      break;

      default: break;
    }
  };

  const setChannelBackground = (channel, currentChannel) => {
    if (channel === currentChannel) return 'selected_channel';
  };

  const renderList = (props, currentChannel) => {
    return (
      props.channels.map(channel => {
        return (
          <div key={channel.id}
              className={`${setChannelBackground(channel.name, currentChannel)} sidebar_btn_wrapper`}
            >
            <div key={channel.id}
                onClick={() => props.setCurrentChannel(channel)}
                className="sidebar_channel overflow_ellipsis">
            <span key={channel.id} className="sidebar_icon">#</span>{channel.name}</div>
          </div>
        );
      })
    );
  };

  return (
    <div className="sidebar_list_container">
      <div className="sidebar_title">
      <span className="sidebar_title_channels">Channels</span>
        <AddOutline className="icon_plus"/>
      </div>
      {renderList(props, currentChannel)}
    </div>
  );
};

export default ChannelsList;
