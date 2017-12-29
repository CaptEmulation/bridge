import React from 'react';
import Card from '../../../components/Card';
import './South.css';

const South = ({
  children,
}) => (
  <div className="south">
    <div className="title">
      <span className="label">
        South
      </span>
    </div>
    <div className="play">
      {children}
    </div>
  </div>
);


const SouthBoard = ({
  cards,
}) => {
  const cardComponents = cards.map(({ rank, suit }, index) => {
    let className = '';
    if (index !== 0) {
      className = 'placeRight';
    }
    return (<Card
      key={`south:${index}`}
      rank={rank}
      suit={suit}
      className={className}
    />);
  });
  return (<South>
    {cardComponents}
  </South>);
}

export default SouthBoard;
