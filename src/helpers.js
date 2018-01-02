import {
  includes,
  range,
  shuffle,
} from 'lodash';

export const suitMap = {
  club: '♣',
  diamond: '♦',
  heart: '♥',
  spade: '♠',
};

export const colorMap = {
  '♣': 'black',
  '♦': 'red',
  '♥': 'red',
  '♠': 'black',
};

export const suitOrder = ['♣', '♦', '♥', '♠', 'NT'];

export function allCards() {
  return range(2, 11)
    .concat(['J', 'Q', 'K', 'A'])
    .reduce((memo, curr) => {
      memo.push(`${curr}♣`);
      memo.push(`${curr}♦`);
      memo.push(`${curr}♥`);
      memo.push(`${curr}♠`);
      return memo;
    }, []);
}

export function shuffledCards() {
  return shuffle(allCards());
}

export function suitToColor(suit) {
  return colorMap[suit] || 'black';
}

export const technicalBids = ['Pass', 'X', 'XX'];
export const trickBids = range(1, 8)
  .reduce((memo, tricks) => {
    suitOrder.reduce((_, suit) => {
      const bid = `${tricks}${suit}`;
      memo.push(bid);
      return memo;
    }, memo);
    return memo;
  }, []);

// List of all possible bids, starting with pass, double and re-double
export const possibleBids = technicalBids.concat(trickBids);
export function bidComparator(bid1, bid2) {
  if (!includes(trickBids, bid1)) {
    throw new Error(`Unrecognized bid ${bid1}`);
  }
  if (!includes(trickBids, bid2)) {
    throw new Error(`Unrecognized bid ${bid2}`);
  }
  const tricks1 = Number(bid1.charAt(0));
  const tricks2 = Number(bid2.charAt(0));
  if (tricks1 !== tricks2) {
    return tricks1 - tricks2;
  }
  const suit1 = suitOrder.indexOf(bid1.slice(1));
  const suit2 = suitOrder.indexOf(bid2.slice(1));
  return suit1 - suit2;
}

function cardToRank(rank) {
  if (rank === 'J') {
    return 11;
  } else if (rank === 'Q') {
    return 12;
  } else if (rank === 'K') {
    return 13;
  } else if (rank === 'A') {
    return 14;
  }
  return Number(rank);
}

export const handOrder = ['♣', '♦', '♠', '♥'];

export function cardComparator(card1, card2) {
  const suit1 = suitOrder.indexOf(card1.suit);
  const suit2 = suitOrder.indexOf(card2.suit);
  const rank1 = cardToRank(card1.rank);
  const rank2 = cardToRank(card2.rank);
  return ((suit1 * 15) + rank1) - ((suit2 * 15) + rank2);
}
