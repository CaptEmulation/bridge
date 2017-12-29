import {
  ADD_NORTH_CARD,
  ADD_WEST_CARD,
  ADD_EAST_CARD,
  ADD_SOUTH_CARD,
} from './actionTypes';

export function addNorthCard({
  rank,
  suit,
}) {
  return {
    type: ADD_NORTH_CARD,
    payload: {
      rank,
      suit,
    },
  };
}

export function addWestCard({
  rank,
  suit,
}) {
  return {
    type: ADD_WEST_CARD,
    payload: {
      rank,
      suit,
    },
  };
}

export function addSouthCard({
  rank,
  suit,
}) {
  return {
    type: ADD_SOUTH_CARD,
    payload: {
      rank,
      suit,
    },
  };
}

export function addEastCard({
  rank,
  suit,
}) {
  return {
    type: ADD_EAST_CARD,
    payload: {
      rank,
      suit,
    },
  };
}
