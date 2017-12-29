import React from 'react';
import Card from '../../../components/Card';
import './West.css';

const West = ({
  children,
}) => (
  <div className="west">
    <div className="title column">
      <span className="label">
        West
      </span>
    </div>
    <div className="play column">
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
