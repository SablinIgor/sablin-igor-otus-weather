import React from 'react';
import PropTypes from "prop-types";

const FavoriteCity = ({ city, onClick }) => (
  <input
    type="submit"
    className="btn btn-full"
    onClick={onClick}
    value={city}
  />

);

FavoriteCity.propTypes = {
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FavoriteCity;

