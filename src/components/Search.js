import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MapWithAMarker from "./MapWithAMarker"

import './geo.css';
import './Search.css';

class Search extends Component {

  constructor(props) {
    super(props);

    console.log(props.location.state)

    this.state = {
      mapCenter: props.location.state === undefined ? null : {  lat: props.location.state.latitude,
                                                                lng: props.location.state.longitude },
      cityName: props.location.state === undefined ? null : props.location.state.city
    };

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
    this.onClickWeatherBtn = this.onClickWeatherBtn.bind(this);
  }

  onClickWeatherBtn(event, cityName){
    event.preventDefault()
    this.props.history.push('/city/' + cityName)
  }

  onSuggestSelect(suggest) {
    if(suggest) {
      this.setState({
        mapCenter: {
          lat: suggest.location.lat,
          lng: suggest.location.lng
        },
        cityName: suggest.label.split(',')[0]
      })
    }
    else {
      this.setState({
        mapCenter: null
      })
    }
  }

  render() {
    return (
      <div className="Search">
        <div className={"row"}>
            <Geosuggest
              id="city"
              placeholder="Search places"
              initialValue={this.state.cityName}
              onSuggestSelect={this.onSuggestSelect}
            />
          { this.state.mapCenter && (<a id="btnShowWeather" className="btn btn-full" onClick={(e) => this.onClickWeatherBtn(e, this.state.cityName)} href="">Show weather</a>)}
        </div>
        <div className={"row"}>
          <div id="mapSearch">
            { this.state.mapCenter && (
              <MapWithAMarker
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: '100%' }} />}
                mapCenter={this.state.mapCenter}
          />)}
          </div>
          { this.state.mapCenter && (<a
                                      id="btnAddFavorite"
                                      className="btn btn-full"
                                      onClick={() => this.props.addFavorites(this.state.cityName)}
                                      href=""
                                      >Add to Favarites</a>)}
        </div>
      </div>

    );
  }
}

export default Search;
