import React from 'react';
import cn from 'classnames';
import {
  includes,
  noop,
} from 'lodash';
import styles from './Input.css';
import {
  possibleBids,
} from '../../../helpers';


function bindBidTocallback(callback, bid) {
  return event => callback(bid, event);
}

const Input = ({
  callback,
  enabledBids,
}) => (
  <div className={cn(styles.boardInput)}>
    {possibleBids.map((bid, index) => (
      <div
        key={bid}
        className={cn({
          [styles.boardBidInput]: true,
          [styles.newRow]: index === 3,
          [styles.disabled]: !includes(enabledBids, bid),
        })}
        onClick={includes(enabledBids, bid) ? bindBidTocallback(callback, bid) : noop}
      >
        {bid}
      </div>
    ))}
  </div>
);

export default Input;
