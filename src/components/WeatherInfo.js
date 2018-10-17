import React, {Component} from 'react';
import './WeatherContainer.css';
import './WeatherInfo.css';

class WeatherInfo extends Component {
  render() {

    const data = this.props.data;
    let WeatherInfoTemplate = {}

    if (data.hasOwnProperty("forecast")) {
      WeatherInfoTemplate = data.forecast.forecastday.map(function (item, index) {
        return (
          <div key={index} className={"WeatherInfo"}>
            <p><i className="ion-ios-person icon-small"></i> {item.date} </p>
            <p><i className="ion-md-thermometer icon-small"></i> {item.day.avgtemp_c} C</p>
            <p><i className="ion-md-partly-sunny icon-small"></i> {item.day.condition.text}</p>
            <p><i className="ion-md-water icon-small"></i> {item.day.avghumidity}%</p>
          </div>
        )
      })
    }
    else
    {
      WeatherInfoTemplate = null
    }
    return (
      <div className={"WeatherContainer"}>{WeatherInfoTemplate}</div>
    )
  }
}

export default WeatherInfo;
