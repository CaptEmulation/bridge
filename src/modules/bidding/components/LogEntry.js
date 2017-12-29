import React from 'react';
import './LogEntry.css';

const LogEntry = ({
  direction,
  bid,
}) => (
  <div className="biddingLogEntry">
    {bid}
  </div>
);

export default LogEntry;
