import React from 'react';
import cn from 'classnames';
import {
  suitToColor,
} from '../helpers';
import styles from './Card.css';

const Card = ({
  rank,
  suit,
  className,
}) => (
  <div className={cn(styles.card, styles[suitToColor(suit)], styles[className])}>
    <div className={cn(styles.cardLeft)}>
      <div className={cn(styles.rank)}>{rank}</div>
      <div className={cn(styles.largeSuit)}>{suit}</div>
    </div>
    <div className={cn(styles.cardRight)}>
      <div className={cn(styles.smallSuit)}>{suit}</div>
    </div>
  </div>
);

export default Card;
