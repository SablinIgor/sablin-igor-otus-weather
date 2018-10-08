import React, {Component} from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Search from '../components/Search'
import FavoriteList from '../components/FavoriteList'
import Weather from "./Weather";

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/city' component={Search} />
          <Route path='/city/:name' component={Weather}/>
          <Route path='/favorites' component={FavoriteList}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
