import React, {Component} from 'react';
import { connect  } from 'react-redux'
import './FavoriteList.css';

import FavoriteCity from '../components/FavoriteCity'

class FavoriteList extends Component {

  render() {
    return (
      <div className="FavoriteList">
        <h2>Favorites City</h2>
        <div>
          <ul>
            {this.props.favorites.map(favorite =>
              <FavoriteCity
                city={favorite}
                key={favorite}
              />
            )}
          </ul>
        </div>
      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
    favorites: state.favorites
  }
}

export default connect(
  mapStateToProps
)(FavoriteList)

