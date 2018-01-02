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

store.dispatch(handActions.deal());


export default App;
