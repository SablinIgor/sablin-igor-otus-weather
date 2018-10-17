import Geosuggest from "react-geosuggest";
import React from "react";

const SuggestCity = (props) => (
  <div>
    <Geosuggest
      id="city"
      placeholder="Search places"
      initialValue={props.cityName}
      onSuggestSelect={props.onSuggestSelect}
    />
    {
      props.mapCenter && (
        <input
          type="submit"
          id="btnShowWeather"
          className="btn btn-full"
          onClick={(e) => props.onClickWeatherBtn(e, props.cityName)}
          value="Show weather"
        />)
    }
  </div>
)

export default SuggestCity
