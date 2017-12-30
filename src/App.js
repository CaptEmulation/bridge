import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import {
  actions as handActions,
} from './modules/hands';
import {
  actions as biddingActions,
} from './modules/bidding';
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

store.dispatch(handActions.addNorthCard({
  rank: 6,
  suit:'♥',
}));
store.dispatch(handActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addNorthCard({
  rank: 5,
  suit:'♥',
}));

store.dispatch(handActions.addWestCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addWestCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addWestCard({
  rank: 5,
  suit:'♥',
}));
store.dispatch(handActions.addWestCard({
  rank: 5,
  suit:'♥',
}));

store.dispatch(handActions.addEastCard({
  rank: 5,
  suit:'♥',
}));

store.dispatch(handActions.addSouthCard({
  rank: 5,
  suit:'♥',
}));


export default App;
