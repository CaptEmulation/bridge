import React from 'react';
import Card from '../../../components/Card';
import './North.css';

const North = ({
  children,
}) => (
  <div className="north">
    <div className="play">
      {children}
    </div>
    <div className="title">
      <span className="label">
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
