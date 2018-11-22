import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Favourites from './components/favourites'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    constructor(){
        super();
        this.state = {
            error : null,
            isLoaded : false,
            items : [],
            favourites : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
        this.updateFavourites = this.updateFavourites.bind(this);
    }

    flag = 0;
    updateFavourites = (object) => {
        this.setState({
            favourites : object
        });
    }
  render() {
      const {error, isLoaded, items} = this.state;
      //push is not working.So I had to do it manually..!!
      console.log(this.state.favourites);
    return (
      <div className="App" class="container">
             <Router>
                <Switch>
                    <Route exact path="/" render = {() => <Home updateFavourites={this.updateFavourites} favourites={this.state.favourites} /> } />
                    <Route exact path="/favourites" render = {() => <Favourites favourites={this.state.favourites}/> } />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
