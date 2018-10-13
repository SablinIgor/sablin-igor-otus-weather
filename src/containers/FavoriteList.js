import React, {Component} from 'react';
import { connect  } from 'react-redux'
import './FavoriteList.css';

import FavoriteCity from '../components/FavoriteCity'

class FavoriteList extends Component {

  constructor(props) {
    super(props);

    this.getCity = this.getCity.bind(this);
  }

  getCity(city) {
    this.props.history.push('/city/' + city)
  }

  render() {
    return (
      <div className="FavoriteList">
        <h2>Favorites City</h2>
        <div className={"row"}>
          <ul>
            {this.props.favorites.map(favorite =>
              <FavoriteCity
                city={favorite}
                key={favorite}
                onClick={() => this.getCity(favorite)}
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

