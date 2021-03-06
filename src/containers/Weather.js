import React, { Component } from 'react';
import { connect  } from 'react-redux'
import './Weather.css';
import WeatherInfo from '../components/WeatherInfo';
import {addFavorites} from "../actions";

class Weather extends Component {

  componentDidMount() {
    this.props.weatherGetData(this.props.match.params.name);
  }

    render() {
     return (
        <div className={"Weather"}>
          <h2>{this.props.match.params.name} <i className="ion-ios-star icon-small icon-fav"
                                                title="Add to favorites"
                                                onClick={() => this.props.addFavoritesAction(this.props.match.params.name)}>
                                            </i>
          </h2>

          <WeatherInfo
            data={this.props.weatherInfo}
          />}
        </div>
     )
    }
}

function mapStateToProps (state) {
  return {
    weatherInfo: state.weatherInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoritesAction: (city) => dispatch(addFavorites(city))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)

