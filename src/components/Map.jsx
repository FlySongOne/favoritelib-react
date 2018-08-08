import React, { Component } from "react";
// Components
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Map extends Component {
  render() {
  
    const MapComponent = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={
              {
                lat: 40.757784,
                lng: -73.829252
              }
          }
        >
       
          {/* {this.props.library.map((lib, index) => {
            console.log({
              lat: lib.latitude,
              lng: lib.longitude
            });
          
            return (
              <Marker
                //key={index}
                key={0}
                position={{
                  lat: lib.latitude,
                  lng: lib.longitude
                }}
              />
            );
           
           })}  */} 
                <Marker
                //key={index}
                key={0}
                position={{
                  lat: this.props.library.latitude,
                  lng: this.props.library.longitude
                }}
              />
        </GoogleMap>
      ))
    );
    return (
      <div className="map-container">
        <MapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDoCQl9Pgpi84MgQIKEncWN6dLjpj0JBdk"
          loadingElement={<div style={{ height: `400px`, width: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  
  }
}
export default Map;

