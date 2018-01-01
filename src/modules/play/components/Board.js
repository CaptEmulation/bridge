import React from 'react';
import cn from 'classnames';
import styles from './Board.css';

const Board = ({
  enabled,
}) => (
  <div className={cn({
    [styles.boardPlay]: true,
    [styles.disabled]: !enabled,
  })} />
);

export default Board;
