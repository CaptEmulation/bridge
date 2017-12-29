import React from 'react';
import Log from '../containers/Log';
import Input from './Input';
import './Board.css'

const Board = ({
  children,
}) => (
  <div className="boardBidding">
    <Log />
    <Input />
  </div>
);

export default Board;
