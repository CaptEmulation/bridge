import {
  PLACE_BID,
} from './actionTypes';

export function placeBid({
  direction,
  bid,
}) {
  return {
    type: PLACE_BID,
    payload: {
      direction,
      bid,
    },
  };
}
