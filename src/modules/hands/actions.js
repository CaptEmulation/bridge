import {
  shuffledCards,
} from '../../helpers';
import {
  ADD_NORTH_CARD,
  ADD_WEST_CARD,
  ADD_EAST_CARD,
  ADD_SOUTH_CARD,
  DEAL_CARDS,
} from './actionTypes';

function splitRankAndSuit(card) {
  let rank = card.charAt(0);
  if (rank === '1') {
    rank = card.slice(0, 2);
  }
  return {
    rank,
    suit: card.slice(-1),
  };
}

export function deal({ direction: startingDrection = 'east' } = {}) {
  let direction = startingDrection;
  return  {
    type: DEAL_CARDS,
    payload: shuffledCards().reduce((memo, card) => {
      if (direction === 'north') {
        direction = 'east';
        memo.north.push(splitRankAndSuit(card));
      } else if (direction === 'east') {
        direction = 'south';
        memo.east.push(splitRankAndSuit(card));
      } else if (direction === 'south') {
        direction = 'west';
        memo.south.push(splitRankAndSuit(card));
      } else if (direction === 'west') {
        direction = 'north';
        memo.west.push(splitRankAndSuit(card));
      }
      return memo;
    }, {
      north: [],
      east: [],
      south: [],
      west: [],
    }),
  };
}

export function addNorthCard(card) {
  return {
    type: ADD_NORTH_CARD,
    payload: splitRankAndSuit(card),
  };
}

export function addWestCard(card) {
  return {
    type: ADD_WEST_CARD,
    payload: splitRankAndSuit(card),
  };
}

export function addSouthCard(card) {
  return {
    type: ADD_SOUTH_CARD,
    payload: splitRankAndSuit(card),
  };
}

export function addEastCard(card) {
  return {
    type: ADD_EAST_CARD,
    payload: splitRankAndSuit(card),
  };
}
