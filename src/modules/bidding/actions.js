import {
  PLACE_BID,
} from './actionTypes';

export function placeBid(bid) {
  return {
    type: PLACE_BID,
    payload: bid,
  };
}
