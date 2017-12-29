import React from 'react';
import LogEntry from './LogEntry';
import './Log.css';

const Log = ({
  startingBid,
  bids,
}) => {
  const bidLog = bids.map(({
    bid,
    direction,
  }, index) => {
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
