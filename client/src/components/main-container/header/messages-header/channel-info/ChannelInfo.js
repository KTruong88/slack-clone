import React from 'react';

import '../../../../../styles/ChannelInfo.scss';
import Phone from '@carbon/icons-react/es/phone/20';
import Information from '@carbon/icons-react/es/information/20';
import Settings from '@carbon/icons-react/es/settings/20';

const ChannelInfo = () => {
  return (
    <div className="channel_info">
      <div className="channel_calls_container">
        <button className="channel_info_btns">
          <Phone className="icon_phone" title="Start a call with Cisco Webex Meetings" />
        </button>
      </div>
      <div className="channel_details_toggle">
        <button className="channel_info_btns">
          <Information className="icon_info" title="Show Channel Details" />
        </button>
      </div>
      <div className="channel_actions_toggle">
        <button className="channel_info_btns">
          <Settings className="icon_settings" title="Channel Settings" />
        </button>
      </div>
    </div>
  );
};

export default ChannelInfo;