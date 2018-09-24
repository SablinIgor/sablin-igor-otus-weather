import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

import { weatherGetData } from '../actions/index';
import { addFavorites } from '../actions/index';

import Finder from '../components/Finder'
import Weather from '../components/Weather'
import FavoriteList from "../components/FavoriteList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {city: "Moscow"};
  }

  render() {
    const { weatherInfo,
            weatherGetDataAction,
            addFavoritesAction,
            hasErrored,
            isLoading,
            favorites
    } = this.props;

    return <div className="App">
      <Finder
        weatherGetData={weatherGetDataAction}
      />
      <FavoriteList
        favorites={ favorites }
        weatherGetData={ weatherGetDataAction }
      />
      <Weather
        hasErrored={hasErrored}
        isLoading={isLoading}
        weatherInfo={weatherInfo}
        addFavorites={addFavoritesAction}
      />

    </div>;
  }
}

function mapStateToProps (state) {
  return {
    city: state.city,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading,
    weatherInfo: state.weatherInfo,
    favorites: state.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    weatherGetDataAction: (city) => dispatch(weatherGetData(city)),
    addFavoritesAction: (city) => dispatch(addFavorites(city))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
