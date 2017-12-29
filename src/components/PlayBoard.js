import React from 'react';
import './PlayBoard.css';

import {
  EastBoard,
  NorthBoard,
  SouthBoard,
  WestBoard,
} from '../modules/hands'
import {
  Board,
} from '../modules/bidding';

const PlayBoard = () => (
  <div className="board">
    <WestBoard />
    <NorthBoard />
    <Board />
    <EastBoard />

    <SouthBoard />
  </div>
);

export default PlayBoard;
