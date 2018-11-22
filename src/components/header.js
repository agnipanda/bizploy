import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-custom">
              <div class="container-fluid">
                <div class="navbar-header">
                  <a class="navbar-brand">Beans Love Beers</a>
                </div>
                <ul class="nav navbar-nav navbar-right" id="ul-custom">
                  <li class="active"><a href="#">Home</a></li>
                  <li><a href="#">Favourites</a></li>
                </ul>
              </div>
            </nav>
            );
    }
}

export default Header;
