import React from 'react';
import Card from '../../../components/Card';
import './East.css';

const East = ({
  children,
}) => (
  <div className="east">
    <div className="play column">
      {children}
    </div>
    <div className="title column">
      <span className="label">
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
