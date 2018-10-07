import React, {Component} from 'react';
import Geosuggest from 'react-geosuggest';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import './Search.css';
import './geo.css';

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
    console.log(suggest);
    this.setState({
      mapCenter: {
        lat: suggest.location.lat,
        lng: suggest.location.lng
      }})
  }

  render() {
    console.log('render');
    console.log(this.state.mapCenter);
    return (
      <div className="Search">
        <div className={"row"}>
            <Geosuggest
              id="city"
              placeholder="Search places"
              onSuggestSelect={this.onSuggestSelect}
            />
        </div>
        <div className={"row"}>
          <div id={"test"}>
            { this.state.mapCenter && (
              <MapWithAMarker
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: '100%' }} />}
                mapCenter={this.state.mapCenter}
          />)}
          </div>
        </div>
      </div>

    );
  }
}

export default Search;
