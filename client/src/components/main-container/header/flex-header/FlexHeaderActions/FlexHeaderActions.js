import React from 'react';

import '../../../../../styles/FlexHeaderActions.scss';
import At from '@carbon/icons-react/es/at/20';
import Star from '@carbon/icons-react/es/star/20';
import Overflow from '@carbon/icons-react/es/overflow-menu--vertical/20';

const FlexHeaderActions = () => {
  return (
    <div className="channel_header_buttons">
      <button className="channel_info_btns" title="Show Activity">
        <At className="icon_at" />
      </button>
      <button className="channel_info_btns" title="Show Starred Items">
        <Star className="flex_icon_star" />
      </button>
      <button className="channel_info_btns" title="More Items">
        <Overflow className="icon_overflow" />
      </button>
    </div>
  );
};

export default FlexHeaderActions;