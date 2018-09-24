import React from 'react';
import './FavoriteList.css';

import FavoriteCity from './FavoriteCity'
import PropTypes from "prop-types";

const FavoriteList = ({ favorites, weatherGetData }) => (
  <div className="FavoriteList">
    <p>Favorites City</p>
    <ul>
      {favorites.map(favorite =>
        <FavoriteCity
          city={favorite}
          key={favorite}
          onClick={() => weatherGetData(favorite)}
        />
      )}
    </ul>
  </div>
);

FavoriteList.propTypes = {
  favorites: PropTypes.array.isRequired,
  weatherGetData: PropTypes.func.isRequired
};

export default FavoriteList;

