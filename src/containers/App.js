import React, { Component } from 'react';
import './App.css';

import { connect  } from 'react-redux'
import { withRouter } from "react-router";

import { weatherGetData } from '../actions/index';
import { addFavorites } from '../actions/index';

import Header from '../components/Header'

import Finder from '../components/Finder'
import Weather from '../components/Weather'
import FavoriteList from "../components/FavoriteList";
import {Route, Switch} from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";

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
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route
          exact path='/city'
          render={(props) => <Search {...props} addFavorites={addFavoritesAction} />}
        />
        <Route
          path='/city/:name'
          render={(props) => <Weather {...props} weatherGetData={weatherGetDataAction} />}
        />

        <Route path='/favorites' component={FavoriteList}/>
      </Switch>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
