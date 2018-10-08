import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Weather.css';

class Weather extends Component {

  onClickHandle (city) {
    this.props.addFavorites(city);
  }

    render() {
     return  <div className={"Weather"}>А тут будет погода в {this.props.match.params.name}</div>
    }
}

/*
Weather.propTypes = {
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  weatherInfo: PropTypes.object,
  addFavorites: PropTypes.func.isRequired
};

*/

export default Weather;
