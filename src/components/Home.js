import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>FIND YOUR WEATHER!</h1>
        <a className="btn btn-full" href="#">I'm Feeling Lucky</a>
      </div>
    );
  }
}

export default Home;

