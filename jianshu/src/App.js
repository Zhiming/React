import React, { Component } from 'react';
import {GlobalStyle} from './style';
import Header from './common/header';
import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <GlobalStyle/>
        <Header/>
      </Provider>
    );
  }
}

export default App;
