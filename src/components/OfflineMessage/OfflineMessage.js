// src/components/OfflineMessage.js
import React from 'react';

const OfflineMessage = () => {
  return (
    <div className="offline-message">
      <div className="offline-content">
        <h2>You're offline</h2>
        <p>Please check your internet connection and try again.</p>
      </div>
    </div>
  );
};

export default OfflineMessage;