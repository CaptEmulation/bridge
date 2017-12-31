import React from 'react';
import cn from 'classnames';
import './Board.css';

const Board = ({
  enabled,
}) => (
  <div className={cn({
    boardPlay: true,
    disabled: !enabled,
  })} />
);

export default Board;
