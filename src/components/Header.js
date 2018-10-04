import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="nav nav-pills flex-column flex-sm-row">
          <a className="flex-sm-fill text-sm-center nav-link active" href="#">Home</a>
          <a className="flex-sm-fill text-sm-center nav-link" href="#">Search</a>
          <a className="flex-sm-fill text-sm-center nav-link" href="#">Favorites</a>
        </nav>
      </div>
    );
  }
}

export default Header;
