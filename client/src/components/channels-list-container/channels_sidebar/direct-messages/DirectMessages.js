import React from 'react';


const renderDirectMessages = () => {
  // TODO: map it from props
  const channels = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur', 'Ash', 'Mysty'];

  return (
    channels.map(channel => {
      return (
        <div className="sidebar_btn_wrapper ">
          <div className="sidebar_channel_messages">
          <span className="sidebar_icon">#</span>{channel}</div>
        </div>
      );
    })
  )
}
const DirectMessages = () => {
  return (
    <div className="sidebar_list_container">
      <div className="sidebar_title">Direct Messages</div>
      {renderDirectMessages()}
    </div>
  );
}

export default DirectMessages;