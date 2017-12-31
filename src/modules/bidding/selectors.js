import { createSelector } from 'reselect';
import {
  includes,
  last,
} from 'lodash';
import {
  comparator,
  technicalBids,
  trickBids,
  possibleBids,
} from '../../helpers';

export const root = state => state.bidding;

export const bids = createSelector(
  root,
  bidding => bidding.bids,
);

export const dealer = createSelector(
  root,
  bidding => bidding.dealer,
);

export const lastBid = createSelector(
  bids,
  last,
);

export const lastTrickBid = createSelector(
  bids,
  _bids => last(_bids.filter(bid => includes(trickBids, bid))),
);

export const active = createSelector(
  root,
  bidding => bidding.active,
);

export const isDoubled = createSelector(
  bids,
  _bids => {
    let doubled = false;
    _bids.forEach(bid => {
      if (doubled && !includes(['Pass', 'X'], bid)) {
        doubled = false;
      }
      if (bid === 'X') {
        doubled = true;
      }
    });
    return doubled;
  },
);

export const isReboubled = createSelector(
  bids,
  _bids => {
    let doubled = false;
    let redoubled = false;
    _bids.forEach(bid => {
      if (doubled && bid === 'XX') {
        redoubled = true;
        doubled = false;
      }
      if (redoubled && !includes(['Pass', 'XX'], bid)) {
        redoubled = false;
      }
      if (doubled && !includes(['Pass', 'X'], bid)) {
        doubled = false;
      }
      if (bid === 'X') {
        doubled = true;
      }
    });
    return redoubled;
  },
);

export const canBeDoubled = createSelector(
  bids,
  isDoubled,
  isReboubled,
  (_bids, _isDoubled, _isRedoubled) => {
    let beDoubled = false;
    if (!_isDoubled && !_isRedoubled) {
      _bids.forEach(bid => {
        if (bid === 'Pass') {
          beDoubled = false;
        }
        if (bid !== 'Pass') {
          beDoubled = true;
        }
      });
    }
    return beDoubled;
  },
);

export const enabledBids = createSelector(
  bids,
  lastTrickBid,
  canBeDoubled,
  isDoubled,
  isReboubled,
  (_bids, _lastTrickBid, _canBeDoubled, _isDoubled, _isRedoubled) => {
    // Pass is always an enabled bid;
    const _enabledBids = ['Pass'];
    if (_canBeDoubled) {
      _enabledBids.push('X');
    }
    if (_isDoubled && !_isRedoubled) {
      _enabledBids.push('XX');
    }
    const remainingBids = _bids
      .filter(bid => !includes(technicalBids, bid) && comparator(_lastTrickBid, bid));

    if (remainingBids.length === 0) {
      trickBids.forEach(bid => _enabledBids.push(bid));
    } else {
      remainingBids.forEach(bid => _enabledBids.push(bid));
    }

    return _enabledBids;
  },
)
