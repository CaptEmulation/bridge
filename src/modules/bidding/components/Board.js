import React from 'react';
import cn from 'classnames';
import Log from '../containers/Log';
import Input from '../containers/Input';
import './Board.css'

const Board = ({
  enabled,
}) => (
  <div className={cn({
    boardBidding: true,
    disabled: !enabled,
  })}>
    <Log />
    <Input />
  </div>
);

export default Board;
