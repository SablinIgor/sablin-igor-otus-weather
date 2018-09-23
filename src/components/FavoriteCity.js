import React from 'react';
import './FavoriteCity.css';
import PropTypes from "prop-types";

const FavoriteCity = ({ city, onClick }) => (
  <li
    className="FavoriteCity"
    onClick={onClick}
  >
    {city}
  </li>
);

FavoriteCity.propTypes = {
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FavoriteCity;

