import React from 'react';
import cn from 'classnames';
import Log from '../containers/Log';
import Input from '../containers/Input';
import styles from './Board.css'

const Board = ({
  enabled,
}) => (
  <div className={cn({
    [styles.boardBidding]: true,
    [styles.disabled]: !enabled,
  })}>
    <Log />
    <Input />
  </div>
);

export default Board;
