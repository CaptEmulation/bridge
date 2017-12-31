import React from 'react';
import LogEntry from './LogEntry';
import './Log.css';

const Log = ({
  bids,
}) => {
  const bidLog = bids.map((bid, index) => {
    return (
      <LogEntry key={`{$bid}:${index}`} bid={bid} />
    );
  });
  return (
    <div className="biddingLog">
      <div className="biddingLogHeader">
        North
      </div>
      <div className="biddingLogHeader">
        East
      </div>
      <div className="biddingLogHeader">
        South
      </div>
      <div className="biddingLogHeader">
        West
      </div>
      {bidLog}
    </div>
  )
};

export default Log;
