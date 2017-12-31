import React from 'react';
import cn from 'classnames';
import {
  includes,
  noop,
} from 'lodash';
import './Input.css';
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
  <div className="boardInput">
    {possibleBids.map((bid, index) => (
      <div
        key={bid}
        className={cn({
          boardBidInput: true,
          newRow: index === 3,
          disabled: !includes(enabledBids, bid),
        })}
        onClick={includes(enabledBids, bid) ? bindBidTocallback(callback, bid) : noop}
      >
        {bid}
      </div>
    ))}
  </div>
);

export default Input;
