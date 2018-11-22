import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-custom">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand">Beans Love Beers</a>
                </div>
                <ul class="nav navbar-nav navbar-right" id="ul-custom">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/favourites">Favourites</Link></li>
                </ul>
              </div>
            </nav>
        );
    }
}

export default Header;
