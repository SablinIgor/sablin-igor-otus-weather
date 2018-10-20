import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";
import React, {Component} from "react";

const MyGoogleMap = withGoogleMap(props =>
  {
    console.log('props.mapCenter')
    console.log(props.mapCenter)

    return (
      <GoogleMap
        defaultZoom={8}
        center={props.mapCenter}
      >
        <Marker
          position={props.mapCenter}
        />
      </GoogleMap>
    )
  }
);

class MapWithAMarker extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.mapCenter)
      return (
        <MyGoogleMap {...this.props} />
      )
    else
      return null
  }
}

export default MapWithAMarker
