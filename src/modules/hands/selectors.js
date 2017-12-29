import { createSelector } from 'reselect';

export const root = state => state.boards;

export const northCards = createSelector(
  root,
  boards => boards.north,
);

export const westCards = createSelector(
  root,
  boards => boards.west,
);

export const eastCards = createSelector(
  root,
  boards => boards.east,
);

export const southCards = createSelector(
  root,
  boards => boards.south,
);
