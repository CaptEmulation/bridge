import {
  ADD_NORTH_CARD,
  ADD_WEST_CARD,
  ADD_EAST_CARD,
  ADD_SOUTH_CARD,
} from './actionTypes';
import createReducer from '../utils/createReducer';

const defaultState = {
  north: [],
  east: [],
  south: [],
  west: [],
};

createReducer('boards', defaultState, {
  [ADD_NORTH_CARD](boards, { payload: { rank, suit }}) {
    return {
      ...boards,
      north: [{ rank, suit}].concat(boards.north),
    };
  },
  [ADD_WEST_CARD](boards, { payload: { rank, suit }}) {
    return {
      ...boards,
      west: [{ rank, suit}].concat(boards.west),
    };
  },
  [ADD_EAST_CARD](boards, { payload: { rank, suit }}) {
    return {
      ...boards,
      east: [{ rank, suit}].concat(boards.east),
    };
  },
  [ADD_SOUTH_CARD](boards, { payload: { rank, suit }}) {
    return {
      ...boards,
      south: [{ rank, suit}].concat(boards.south),
    };
  },
});
