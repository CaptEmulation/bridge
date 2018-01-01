import React from 'react';
import cn from 'classnames';
import styles from './PlayBoard.css';

import {
  EastBoard,
  NorthBoard,
  SouthBoard,
  WestBoard,
} from '../modules/hands'
import {
  Board as BiddingBoard,
} from '../modules/bidding';
import {
  Board as PlayingBoard,
} from '../modules/play';

const PlayBoard = () => (
  <div className={cn(styles.board)}>
    <WestBoard />
    <NorthBoard />
    <BiddingBoard />
    <PlayingBoard />
    <EastBoard />
    <SouthBoard />
  </div>
);

export default PlayBoard;
