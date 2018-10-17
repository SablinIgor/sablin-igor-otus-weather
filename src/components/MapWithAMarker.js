import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";
import React from "react";

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

export default MapWithAMarker
