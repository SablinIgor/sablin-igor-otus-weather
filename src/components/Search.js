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
      mapCenter: null
    };

    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  onSuggestSelect(suggest) {
    if(suggest) {
      this.setState({
        mapCenter: {
          lat: suggest.location.lat,
          lng: suggest.location.lng
        }
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
          { this.state.mapCenter && (<a id="btnShowWeather" className="btn btn-full" href="#">Show weather</a>)}
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
          { this.state.mapCenter && (<a id="btnAddFavorite" className="btn btn-full" href="#">Add to Favarites</a>)}
        </div>
      </div>

    );
  }
}

export default Search;
