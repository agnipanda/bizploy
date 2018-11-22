import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Favourites from './components/favourites'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App" class="container">
          <Header/>
          <Home />
      </div>
    );
  }
}

export default App;
