import {
  canBeDoubled,
  enabledBids,
  isDoubled,
  isReboubled,
} from './selectors';
import {
  possibleBids,
  trickBids,
} from '../../helpers';

function primeStateWithBids(bids) {
  return {
    bidding: {
      bids,
    },
  };
}

describe('bidding selectors', () => {
  describe('#isDoubled', () => {
    it('empty bidding', () => {
      expect(isDoubled(primeStateWithBids([]))).toEqual(false);
    });
    it('passing bidding', () => {
      expect(isDoubled(primeStateWithBids(['Pass', 'Pass']))).toEqual(false);
    });
    it('a bid was placed and it was doubled', () => {
      expect(isDoubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'X',
      ]))).toEqual(true);
    });
    it('a bid was placed, it was doubled, but then a new bid was placed', () => {
      expect(isDoubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'X', 'Pass', '2NT',
      ]))).toEqual(false);
    });
    it('a bid was placed, it was doubled, but then a new bid was placed and it was doubled', () => {
      expect(isDoubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'X', 'Pass', '2NT', 'Pass', 'X',
      ]))).toEqual(true);
    });
  });

  describe('#isReboubled', () => {
    it('empty bidding', () => {
      expect(isReboubled(primeStateWithBids([]))).toEqual(false);
    });
    it('passing bidding', () => {
      expect(isReboubled(primeStateWithBids(['Pass', 'Pass']))).toEqual(false);
    });
    it('a bid was placed and it was doubled', () => {
      expect(isReboubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'X',
      ]))).toEqual(false);
    });
    it('a bid was placed and it was doubled then redoubled', () => {
      expect(isReboubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'X', 'XX',
      ]))).toEqual(true);
    });
    it('a bid was placed, it was doubled and redoubled, but then a new bid was placed', () => {
      expect(isReboubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'X', 'XX', 'Pass', '2NT',
      ]))).toEqual(false);
    });
    it('a bid was placed, it was doubled, but then a new bid was placed and it was doubled and redoubled', () => {
      expect(isReboubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'X', 'Pass', '2NT', 'Pass', 'X', 'XX'
      ]))).toEqual(true);
    });
  });

  describe('#canBeDoubled', () => {
    it('empty bidding', () => {
      expect(canBeDoubled(primeStateWithBids([]))).toEqual(false);
    });
    it('passing bidding', () => {
      expect(canBeDoubled(primeStateWithBids(['Pass', 'Pass']))).toEqual(false);
    });
    it('a bid was placed', () => {
      expect(canBeDoubled(primeStateWithBids([
        'Pass', 'Pass', '1NT',
      ]))).toEqual(true);
    });
    it('a bid was placed, it was doubled, but then a new bid was placed', () => {
      expect(canBeDoubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'X', 'Pass', '2NT',
      ]))).toEqual(true);
    });
    it('a bid was placed and it was passed once', () => {
      expect(canBeDoubled(primeStateWithBids([
        'Pass', 'Pass', '1NT', 'Pass',
      ]))).toEqual(false);
    });
  });

  describe('#enabledBids', () => {
    it('empty bidding', () => {
      expect(enabledBids(primeStateWithBids([]))).toEqual(['Pass'].concat(trickBids));
    });

    it('pass bidding', () => {
      expect(enabledBids(primeStateWithBids(['Pass']))).toEqual(['Pass'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', 'Pass']))).toEqual(['Pass'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', 'Pass', 'Pass']))).toEqual(['Pass'].concat(trickBids));
    });

    it('allows doubling', () => {
      expect(enabledBids(primeStateWithBids(['1NT']))).toEqual(['Pass', 'X'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', '1NT']))).toEqual(['Pass', 'X'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', 'Pass', '1NT']))).toEqual(['Pass', 'X'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', 'Pass', 'Pass', '1NT']))).toEqual(['Pass', 'X'].concat(trickBids));
    });

    it('allows redoubling', () => {
      expect(enabledBids(primeStateWithBids(['1NT', 'X']))).toEqual(['Pass', 'XX'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', '1NT', 'X']))).toEqual(['Pass', 'XX'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', 'Pass', '1NT', 'X']))).toEqual(['Pass', 'XX'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', 'Pass', 'Pass', '1NT', 'X']))).toEqual(['Pass', 'XX'].concat(trickBids));
    });

    it('no more doubling or redoubling', () => {
      expect(enabledBids(primeStateWithBids(['1NT', 'X', 'XX']))).toEqual(['Pass'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', '1NT', 'X', 'XX']))).toEqual(['Pass'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', 'Pass', '1NT', 'X', 'XX']))).toEqual(['Pass'].concat(trickBids));
      expect(enabledBids(primeStateWithBids(['Pass', 'Pass', 'Pass', '1NT', 'X', 'XX']))).toEqual(['Pass'].concat(trickBids));
    });
  });
});
