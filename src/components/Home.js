import React, {Component} from 'react';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.onClickLuckyBtn = this.onClickLuckyBtn.bind(this);
  }

  onClickLuckyBtn() {
  }

  render() {
    return (
      <div className="Home">
        <h1>FIND YOUR WEATHER!</h1>
        <a className="btn btn-full" href="#" onClick={this.onClickLuckyBtn}>I'm Feeling Lucky</a>
      </div>
    );
  }
}

export default Home;

