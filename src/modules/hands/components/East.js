import React from 'react';
import cn from 'classnames';
import Card from '../../../components/Card';
import styles from './East.css';

const East = ({
  children,
}) => (
  <div className={styles.east}>
    <div className={cn(styles.play, styles.column)}>
      {children}
    </div>
    <div className={cn(styles.boardTitle, styles.column)}>
      <span className={styles.label}>
        East
      </span>
    </div>
  </div>
);

const EastBoard = ({
  cards,
}) => {
  const cardComponents = cards.map(({ rank, suit }, index) => {
    let className = '';
    if (index !== 0) {
      className = 'placeDown';
    }
    return (<Card
      key={`East:${index}`}
      rank={rank}
      suit={suit}
      className={className}
    />);
  });
  return (<East>
    {cardComponents}
  </East>);
}

export default EastBoard;
