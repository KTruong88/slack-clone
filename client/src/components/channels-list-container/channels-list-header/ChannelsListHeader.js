import React from 'react';

import '../../../styles/ChannelsListHeader.scss';
import ChevronDown from '@carbon/icons-react/es/chevron--down/16';
import Notification from '@carbon/icons-react/es/notification/20';
import RecordingFilled from '@carbon/icons-react/es/recording--filled/20';

const ChannelsListHeader = () => {
  return (
    <div className="channels_list_header">
      <div className="channel_name_wrap">
        <div className="team_name overflow_ellipsis">MD&I - IBM Market Development and Insights</div>
        <span>
          <ChevronDown className="icon_chevron_down" />
          <Notification className="icon_notification" />
        </span>
      </div>
      <div className="menu_user overflow_ellipsis">
        <RecordingFilled className="icon_recording_filled" />
        <div className="menu_user_name">Kevin Truong</div>
      </div>
    </div>
  );
};

export default ChannelsListHeader;