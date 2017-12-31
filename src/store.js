import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer } from './modules/utils/createReducer';
import { middleware as epicMiddleware } from './modules/utils/createEpic';

const store = createStore(
  reducer,
  applyMiddleware(
    epicMiddleware(),
    createLogger(),
  ),
);

export default store;
