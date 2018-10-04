import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="nav nav-pills flex-column flex-sm-row">
          <Link to='/' className="flex-sm-fill text-sm-center nav-link active">Home</Link>
          <Link to='/city' className="flex-sm-fill text-sm-center nav-link">Search</Link>
          <Link to='/favorites' className="flex-sm-fill text-sm-center nav-link">Favorites</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
