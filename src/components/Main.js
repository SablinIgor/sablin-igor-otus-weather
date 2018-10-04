import React, {Component} from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Search from '../components/Search'
import FavoriteList from '../components/FavoriteList'

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/city' component={Search}/>
          <Route path='/favorites' component={FavoriteList}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
