import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import {
  actions as boardActions,
} from './modules/boards';
import PlayBoard from './components/PlayBoard';
import store from './store';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PlayBoard />
      </Provider>
    );
  }
}

store.dispatch(boardActions.addNorthCard({
  rank: 6,
  suit:'♥',
}));
store.dispatch(boardActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));

store.dispatch(boardActions.addWestCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addWestCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addWestCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(boardActions.addWestCard({
  rank: 5,
  suit:'♥',
}));

store.dispatch(boardActions.addEastCard({
  rank: 5,
  suit:'♥',
}));

store.dispatch(boardActions.addSouthCard({
  rank: 5,
  suit:'♥',
}));


export default App;
