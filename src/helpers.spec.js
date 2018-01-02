import {
  allCards,
  bidComparator,
  shuffledCards,
  trickBids,
} from './helpers';

describe('Helpers test suite', () => {
  describe('#trickBids', () => {
    it('matches suit bids', () => {
      expect(trickBids.indexOf('1♥')).toBeGreaterThan(-1);
      expect(trickBids.indexOf('7NT')).toBeGreaterThan(-1);
    });
  });
  describe('#bidComparator', () => {
    it('different tricks', () => {
      expect(bidComparator('2NT', '1NT')).toEqual(1);
      expect(bidComparator('2NT', '1♣')).toEqual(1);
      expect(bidComparator('2♥', '1♣')).toEqual(1);
      expect(bidComparator('2♣', '2♥')).toEqual(-2);
    });

    it('same tricks', () => {
      expect(bidComparator('3NT', '3♣')).toEqual(4);
      expect(bidComparator('2NT', '2♣')).toEqual(4);
      expect(bidComparator('1♥', '1♣')).toEqual(2);
      expect(bidComparator('4♣', '4NT')).toEqual(-4);
    });

    it('equality', () => {
      expect(bidComparator('3NT', '3NT')).toEqual(0);
      expect(bidComparator('2♣', '2♣')).toEqual(0);
      expect(bidComparator('1♣', '1♣')).toEqual(0);
      expect(bidComparator('1♥', '1♥')).toEqual(0);
    });
  });
  describe('#allCards', () => {
    it('has 52 cards', () => {
      expect(allCards()).toHaveLength(52);
    });
  });
  describe('#shuffledCards', () => {
    it('is shuffled', () => {
      expect(shuffledCards()).not.toEqual(allCards());
    });
  });
});
