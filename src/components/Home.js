import React, {Component} from 'react';
import axios from 'axios';

import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.onClickLuckyBtn = this.onClickLuckyBtn.bind(this);
  }

  onClickLuckyBtn() {
    const randomOffset = Math.floor(Math.random() * 999) + 1

    axios.get('http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=' + randomOffset)
      .then(result => {
        this.props.history.push({
          pathname: '/city',
          state: {  latitude: result.data.data[1].latitude,
                    longitude: result.data.data[1].longitude,
                    city: result.data.data[1].city}
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="Home">
        <h1>FIND YOUR WEATHER!</h1>
        <input
          type="submit"
          className="btn btn-full"
          value="I'm Feeling Lucky"
          onClick={this.onClickLuckyBtn}
        />
      </div>
    );
  }
}

export default Home;

