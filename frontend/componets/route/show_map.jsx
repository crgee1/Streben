import React from 'react';
import { withRouter } from 'react-router-dom';

class SmallMap extends React.Component {
  constructor(props) {
    super(props)
    this.markersArr = [];
    this.placeMarker = this.placeMarker.bind(this);
    this.displayRoute = this.displayRoute.bind(this);
    this.state = {locations: []}
  }

  componentDidMount() {
    this.map = new google.maps.Map(document.getElementById('minimap'), {
      zoom: 16,
      center: { lat: 37.7989687, lng: -122.4024461 }
    });
    this.directionsService = new google.maps.DirectionsService;
    this.directionsRender = new google.maps.DirectionsRenderer({
      map: this.map,
    });
    
    setTimeout(()=> {this.props.locations.filter(location => location.route_id === parseInt(this.props.match.params.routeId))
      .sort((a, b) => (a.order > b.order) ? 1 : -1)
        .forEach(point => {
          this.placeMarker({
            lat: point.latitude, lng: point.longitude
          })
        })}, 1200)
    
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (prevProps.locations !== this.props.locations) {
      this.setState({ locations: this.props.locations })
    }
  }

  placeMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
    });
    marker.setMap(this.map);
    this.markersArr.push(marker);
    if (this.markersArr.length >= 2) {
      this.markersArr.forEach(mark => mark.setMap(null));
      this.displayRoute(this.markersArr[0].position, this.markersArr[this.markersArr.length - 1].position, this.markersArr.slice(1, this.markersArr.length - 1), this.directionsService, this.directionsRender);
    }
  }

  displayRoute(origin, destination, midpoints, service, render) {
    service.route({
      origin: origin,
      destination: destination,
      waypoints: midpoints.map(mark => ({ location: mark.position })),
      travelMode: 'WALKING',
      // unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidTolls: true
    }, function (response, status) {
      if (status === 'OK') {
        render.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  render() {
    return (
      <div id="minimap"></div>
    );
  }
}

export default withRouter(SmallMap);