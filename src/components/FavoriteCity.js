import React from 'react';
import './FavoriteCity.css';
import PropTypes from "prop-types";

const FavoriteCity = ({ city, onClick }) => (
  <a
    className="btn btn-full"
    onClick={onClick}
    href="#"
  >
    {city}
  </a>
);

FavoriteCity.propTypes = {
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FavoriteCity;

