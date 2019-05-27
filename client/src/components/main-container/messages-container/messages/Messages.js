import React from 'react';

import '../../../../styles/Messages.scss';

const Messages = (props) => {
  // props.img, props.messageSender, props.messageBody, props.timeStamp
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
              <span className="message_timestamp">9:38AM</span>
            </div>
            <div className="message_body">
              You wash the dished, you tidy up the room, you clean the fireplace, and I'll use the broom.
            </div>
          </div>
        </div>
        <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/little_mermaid.svg')} alt="cartoon little mermaid" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
          <div className="message_content">
            <div className="message_sender">
              Jasmine
              <span className="message_timestamp">10:45 AM</span>
            </div>
            <div className="message_body">
              Jasmine, I do love you, but I gotta stop pretending to be something I’m not.
            </div>
          </div>
        </div>
        <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/princess_jasmine.svg')} alt="cartoon princess jasmine" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
          <div className="message_content">
            <div className="message_sender">
              Ariel
              <span className="message_timestamp">10:18 AM</span>
            </div>
            <div className="message_body">
              I don’t see how a world that makes such wonderful things could be bad.
            </div>
          </div>
        </div>
        <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/princess_belle.svg')} alt="cartoon princess belle" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
          <div className="message_content">
            <div className="message_sender">
              Belle
              <span className="message_timestamp">10:45 AM</span>
            </div>
            <div className="message_body">
              He's no monster, Gaston; you are
            </div>
          </div>
        </div>
        <div className="message_line">
          <div className="message_gutter">
            <img src={require('../../../../shared/icons/cinderella.svg')} alt="cartoon cinderella" title="https://www.iconfinder.com/vectto" className="icon_disney" />
          </div>
           <div className="message_content">
            <div className="message_sender">
              Cinderella
              <span className="message_timestamp">2:05 PM</span>
            </div>
            <div className="message_body">
              What’s a royal ball ? After all, I suppose it would be frightfully dull, and boring, and completely… completely wonderful.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
