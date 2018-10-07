import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav>
          <div className="row">
                <ul className="main-nav">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/city'>Search</Link></li>
                  <li><a href="#cities">Favorites</a></li>
                </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
