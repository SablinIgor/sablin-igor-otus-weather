import React, {Component} from 'react';
import MapWithAMarker from "./MapWithAMarker"
import SuggestCity from './SuggestCity'

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
          <SuggestCity
            cityName={this.state.cityName}
            onSuggestSelect={this.onSuggestSelect}
            mapCenter={this.state.mapCenter}
            onClickWeatherBtn={this.onClickWeatherBtn}
          />
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
          { this.state.mapCenter && (<input
                                      type="submit"
                                      id="btnAddFavorite"
                                      className="btn btn-full"
                                      onClick={() => this.props.addFavorites(this.state.cityName)}
                                      value="Add to Favarites"
                                      />)}
        </div>
      </div>

    );
  }
}

export default Search;
