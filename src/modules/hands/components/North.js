import React from 'react';
import Card from '../../../components/Card';
import styles from './North.css';

const North = ({
  children,
}) => (
  <div className={styles.north}>
    <div className={styles.play}>
      {children}
    </div>
    <div className={styles.title}>
      <span className={styles.label}>
        North
      </span>
    </div>
  </div>
);

const NorthBoard = ({
  cards,
}) => {
  const cardComponents = cards.map(({ rank, suit }, index) => {
    let className = '';
    if (index !== 0) {
      className = 'placeRight';
    }
    return (<Card
      key={`north:${index}`}
      rank={rank}
      suit={suit}
      className={className}
    />);
  });
  return (<North>
    {cardComponents}
  </North>);
}

export default NorthBoard;
