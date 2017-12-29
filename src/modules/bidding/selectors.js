import { createSelector } from 'reselect';

export const root = state => state.bidding;

export const bids = createSelector(
  root,
  bidding => bidding.bids,
);

export const startingBid = createSelector(
  root,
  bidding => bidding.startingBid,
);
