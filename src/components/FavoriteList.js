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
          onClick={() => weatherGetData('http://api.apixu.com/v1/current.json?key=ef5d03b40b984087bc8135539182209&q=' + favorite)}
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

