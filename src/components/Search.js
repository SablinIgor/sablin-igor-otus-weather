import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import './geo.css';
import './Search.css';


const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    center={props.mapCenter}
  >
    <Marker
      position={props.mapCenter}
    />
  </GoogleMap>
);

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mapCenter: null,
      cityName: null
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
              onSuggestSelect={this.onSuggestSelect}
            />
          { this.state.mapCenter && (<a id="btnShowWeather" className="btn btn-full" onClick={(e) => this.onClickWeatherBtn(e, this.state.cityName)} href="#">Show weather</a>)}
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
                                      >Add to Favarites</a>)}
        </div>
      </div>

    );
  }
}

export default Search;
