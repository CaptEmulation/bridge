import React from 'react';
import LogEntry from './LogEntry';
import styles from './Log.css';

const Log = ({
  bids,
}) => {
  const bidLog = bids.map((bid, index) => {
    return (
      <LogEntry key={`{$bid}:${index}`} bid={bid} />
    );
  });
  return (
    <div className={styles.biddingLog}>
      <div className={styles.biddingLogHeader}>
        North
      </div>
      <div className={styles.biddingLogHeader}>
        East
      </div>
      <div className={styles.biddingLogHeader}>
        South
      </div>
      <div className={styles.biddingLogHeader}>
        West
      </div>
      {bidLog}
    </div>
  )
};

export default Log;
