import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer } from './modules/utils/createReducer';

const store = createStore(
  reducer,
  applyMiddleware(createLogger()),
);

export default store;
