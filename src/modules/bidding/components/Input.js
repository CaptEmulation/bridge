import React from 'react';
import {
  range,
} from 'lodash';
import './Input.css';
import {
  suitOrder,
} from '../../../helpers';


const Input = ({
  callback,
}) => (
  <div className="boardInput">
    {range(1, 8).reduce((memo, tricks) => {
      suitOrder.reduce((_, suit) => {
        const bid = `${tricks}${suit}`;
        memo.push(
          <div key={bid} className="boardBidInput">
            {bid}
          </div>
        );
        return memo;
      }, memo);
      return memo;
    }, [])}
  </div>
);

export default Input;
