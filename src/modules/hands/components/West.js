import React from 'react';
import Card from '../../../components/Card';
import styles from './West.css';

const West = ({
  children,
}) => (
  <div className={styles.west}>
    <div className={styles.title}>
      <span className={styles.label}>
        West
      </span>
    </div>
    <div className={styles.play}>
      {children}
    </div>
  </div>
);

const WestBoard = ({
  cards,
}) => {
  const cardComponents = cards.map(({ rank, suit }, index) => {
    let className = '';
    if (index !== 0) {
      className = 'placeDown';
    }
    return (<Card
      key={`West:${index}`}
      rank={rank}
      suit={suit}
      className={className}
    />);
  });
  return (<West>
    {cardComponents}
  </West>);
}

export default WestBoard;
