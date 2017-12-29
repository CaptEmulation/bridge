import React from 'react';
import cn from 'classnames';
import {
  suitToColor,
} from '../helpers';
import './Card.css';

const Card = ({
  rank,
  suit,
  className,
}) => (
  <div className={cn('card', suitToColor(suit), className)}>
    <div className="cardLeft">
      <div className="rank">{rank}</div>
      <div className="largeSuit">{suit}</div>
    </div>
    <div className="cardRight">
      <div className="smallSuit ">{suit}</div>
    </div>
  </div>
);

export default Card;
