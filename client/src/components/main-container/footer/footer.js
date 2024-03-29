import React from 'react';

import Add from '@carbon/icons-react/es/add/16';
import At from '@carbon/icons-react/es/at/20';
import Face from '@carbon/icons-react/es/face--satisfied/20';
import '../../../styles/Footer.scss';

const Footer = (props) => {
  const currentChannel = props.currentChannel.name;

  return (
    <div className="footer">
      <div className="text_bar">
        <button className="text_bar_btn">
          <Add className="icon_add" />
        </button>
        <input className="text_input" placeholder={`Message ${currentChannel}`} />
        <button className="footer_icon at_btn">
         <At className="footer_icon_at" />
        </button>
        <button className="footer_icon face_btn">
          <Face className="icon_face" />
        </button>
      </div>
      <div className="notification_bar" />
    </div>
  );
};

export default Footer;
