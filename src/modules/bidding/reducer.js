import {
  PLACE_BID,
} from './actionTypes';
import createReducer from '../utils/createReducer';

const defaultState = {
  bids: [],
  startingBid: 'north',
};

const reducer = createReducer('bidding', defaultState, {
  [PLACE_BID](bidding, { payload: { direction, bid }}) {
    return {
      ...bidding,
      bids: bidding.bids.concat([{
        direction,
        bid,
      }]),
    };
  },
});
