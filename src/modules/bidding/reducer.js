import {
  PLACE_BID,
} from './actionTypes';
import createReducer from '../utils/createReducer';

const defaultState = {
  bids: [],
  dealer: 'north',
  enabled: true,
  active: 'north',
};

createReducer('bidding', defaultState, {
  [PLACE_BID](bidding, { payload: bid}) {
    return {
      ...bidding,
      bids: bidding.bids.concat([bid]),
    };
  },
});
