import { createSelector } from 'reselect';
import {
  cardComparator,
} from '../../helpers';

export const root = state => state.boards;

export const northCards = createSelector(
  root,
  boards => boards.north,
);

export const sortedNorthCards = createSelector(
  northCards,
  cards => cards.sort((a, b) => -cardComparator(a, b)),
);

export const westCards = createSelector(
  root,
  boards => boards.west,
);

export const sortedWestCards = createSelector(
  westCards,
  cards => cards.sort((a, b) => -cardComparator(a, b)),
);

export const eastCards = createSelector(
  root,
  boards => boards.east,
);

export const sortedEastCards = createSelector(
  eastCards,
  cards => cards.sort((a, b) => -cardComparator(a, b)),
);

export const southCards = createSelector(
  root,
  boards => boards.south,
);

export const sortedSouthCards = createSelector(
  southCards,
  cards => cards.sort((a, b) => -cardComparator(a, b)),
);
