import React from 'react';
import cn from 'classnames';
import {
  range,
} from 'lodash';
import './Input.css';
import {
  suitOrder,
} from '../../../helpers';


function bindBidTocallback(callback, bid) {
  return event => callback(bid, event);
}

const Input = ({
  callback,
}) => (
  <div className="boardInput">
    {range(1, 8).reduce((memo, tricks, index1) => {
      suitOrder.reduce((_, suit, index2) => {
        const bid = `${tricks}${suit}`;
        memo.push(
          <div
            key={bid}
            className={cn('boardBidInput', index1 === 0 && index2 === 0 ? 'newRow' : '')}
            onClick={bindBidTocallback(callback, bid)}
          >
            {bid}
          </div>
        );
        return memo;
      }, memo);
      return memo;
    }, [
      <div className="boardBidInput" onClick={bindBidTocallback(callback, 'Pass')}>
        Pass
      </div>,
      <div className="boardBidInput" onClick={bindBidTocallback(callback, 'X')}>
        X
      </div>,
      <div className="boardBidInput" onClick={bindBidTocallback(callback, 'XX')}>
        XX
      </div>,
    ])}
  </div>
);

export default Input;
