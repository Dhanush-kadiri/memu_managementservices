import React from 'react';
import '../Styling/AvatarPage.css';

const AvatarPage = () => {
  return (
    <div className="avatar-page-container">
      <div className="avatar">
        <div className="avatar-head">
          <div className="avatar-eyes">
            <div className="avatar-eye"></div>
            <div className="avatar-eye"></div>
          </div>
          <div className="avatar-lips"></div>
        </div>
        <div className="avatar-body">
          <div className="avatar-hand avatar-hand-left"></div>
          <div className="avatar-hand avatar-hand-right"></div>
          
        </div>
        
      </div>
      <div className="avatar-message" >
        Your event has been booked!
      </div>
    </div>
  );
};

export default AvatarPage;
