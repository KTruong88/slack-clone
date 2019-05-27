import React from 'react';

import '../../../../styles/Messages.scss';

const Messages = (props) => {
  return (
    <div className="messages_wrap">
      <div className="message_line_container">
        <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/snow_white.svg')} alt="cartoon snow white" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
          <div className="message_content">
            <div className="message_sender">
              Snow White
              <span className="message_timestamp">9:38 AM</span>
            </div>
            <div className="message_body">
              What a lovely day!
            </div>
          </div>
        </div>
        {/* <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/little_mermaid.svg')} alt="cartoon little mermaid" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
        </div>
        <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/princess_jasmine.svg')} alt="cartoon princess jasmine" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
        </div>
        <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/princess_belle.svg')} alt="cartoon princess belle" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
        </div>
        <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/cinderella.svg')} alt="cartoon cinderella" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Messages;