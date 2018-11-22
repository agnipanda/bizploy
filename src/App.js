import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Favourites from './components/favourites'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            favourites : []
        }
        this.updateFavourites = this.updateFavourites.bind(this);
    }

    updateFavourites = (object) => {
        this.setState({
            favourites : object
        });
    }

  render() {
      console.log(this.state.favourites);
    return (
      <div className="App" class="container">
          <Header/>
             <Router>
                <Switch>
                    <Route exact path="/" render = {() => <Home updateFavourites={this.updateFavourites} /> } />
                    <Route exact path="/favourites" render = {() => <Favourites favourites={this.state.favourites}/> } />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
