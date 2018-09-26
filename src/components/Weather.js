import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Weather.css';

class Weather extends Component {

  onClickHandle (city) {
    this.props.addFavorites(city);
  }

    render() {
      const {  hasErrored, isLoading, weatherInfo } = this.props;

      if (hasErrored) {
        return <h3>Sorry! There was an error loading the weather!</h3>;
      }

      if (isLoading) {
        return <h3>Loading…</h3>;
      }

      if (weatherInfo.hasOwnProperty('location') ){
        return <div className="Weather">
          <p className="CityName">{weatherInfo.location.name} </p>
          <button onClick={this.onClickHandle.bind(this, weatherInfo.location.name)}>Add to Favorite</button>
          <ul>
            <li>Temperature: {weatherInfo.current.temp_c} C</li>
            <li>Feels like: {weatherInfo.current.feelslike_c} C</li>
            <li>Condition: {weatherInfo.current.condition.text}</li>
            <li>Cloud cover: {weatherInfo.current.cloud} %</li>
            <li>Wind speed: {weatherInfo.current.wind_kph} kph</li>
            <li>Humidity: {weatherInfo.current.humidity} %</li>
          </ul>
        </div>;
      }
      else{
        return (
          <div className="Weather">
            <p>Choose your city!</p>
          </div>
        )
      }
    }
}

Weather.propTypes = {
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  weatherInfo: PropTypes.object,
  addFavorites: PropTypes.func.isRequired
};

export default Weather;
