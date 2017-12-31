import React from 'react';
import cn from 'classnames';
import {
  range,
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
}) => (
  <div className="boardInput">
    {possibleBids.map((bid, index) => (
      <div
        key={bid}
        className={cn('boardBidInput', index === 3 ? 'newRow' : '')}
        onClick={bindBidTocallback(callback, bid)}
      >
        {bid}
      </div>
    ))}
  </div>
);

export default Input;
