import {
  comparator,
  trickBids,
} from './helpers';

describe('Helpers test suite', () => {
  describe('#trickBids', () => {
    it('matches suit bids', () => {
      expect(trickBids.indexOf('1♥')).toBeGreaterThan(-1);
      expect(trickBids.indexOf('7NT')).toBeGreaterThan(-1);
    });
  });
  describe('#comparator', () => {
    it('different tricks', () => {
      expect(comparator('2NT', '1NT')).toEqual(1);
      expect(comparator('2NT', '1♣')).toEqual(1);
      expect(comparator('2♥', '1♣')).toEqual(1);
      expect(comparator('2♣', '2♥')).toEqual(-2);
    });

    it('same tricks', () => {
      expect(comparator('3NT', '3♣')).toEqual(4);
      expect(comparator('2NT', '2♣')).toEqual(4);
      expect(comparator('1♥', '1♣')).toEqual(2);
      expect(comparator('4♣', '4NT')).toEqual(-4);
    });

    it('equality', () => {
      expect(comparator('3NT', '3NT')).toEqual(0);
      expect(comparator('2♣', '2♣')).toEqual(0);
      expect(comparator('1♥', '1♥')).toEqual(0);
    });
  });
});
