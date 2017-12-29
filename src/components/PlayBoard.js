import React from 'react';
import './PlayBoard.css';

import {
  EastBoard,
  NorthBoard,
  SouthBoard,
  WestBoard,
 } from '../modules/boards'

const PlayBoard = () => (
  <div className="board">
    <NorthBoard />
    <WestBoard />
    <EastBoard />
    <SouthBoard />
  </div>
);

export default PlayBoard;
