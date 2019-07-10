import { Map, GoogleApiWrapper, GoogleMap, withGoogleMap } from 'google-maps-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locationArr: [] }
    this.markersArr = [];
    this.placeMarker = this.placeMarker.bind(this);
    this.displayRoute = this.displayRoute.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
    this.plotElevation = this.plotElevation.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.computeUrl = this.computeUrl.bind(this);
  }

  componentDidMount() {
    this.props.fetchLocations();
    this.props.fetchRoute(this.props.match.params.routeId);
    this.map = new google.maps.Map(this.refs.map, {
      zoom: 16,
      center: { lat: 37.7989687, lng: -122.4024461 }  // 825 Battery
    });

    this.elevationService = new google.maps.ElevationService;
    this.directionsService = new google.maps.DirectionsService;
    this.directionsRender = new google.maps.DirectionsRenderer({
      draggable: true,
      map: this.map,
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.placeMarker(event.latLng);
    });

    this.directionsRender.addListener('directions_changed', () => {
      let path = this.markersArr.map(mark => ({
        lat: mark.getPosition().lat(),
        lng: mark.getPosition().lng()
      }));

      this.elevationService.getElevationAlongPath({ path: path, samples: 10, }, this.plotElevation)
      const result = this.directionsRender.getDirections();
      this.computeUrl(result);
      this.computeTotalDistance(result);
    });

    setTimeout(() => this.props.prevLocations.sort((a, b) => (a.order > b.order) ? 1 : -1)
      .forEach(point => {this.placeMarker({
        lat: point.latitude, lng: point.longitude
      })
    }), 1200);;
  }

  plotElevation(elevations, status) {
    let sum = 0;
    for (let i = 0; i < elevations.length - 1; i++) {
      let cur = elevations[i].elevation;
      let next = elevations[i + 1].elevation;
      if (cur < next) {
        sum += (next - cur);
      }
      this.setState({ elevation: Math.round(sum) })
      document.getElementById('elevation').innerHTML = Math.round(sum) + ' ft';
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

      this.setState({
        locationArr: this.markersArr.map((mark, i) => {
          return {
            latitude: mark.getPosition().lat(),
            longitude: mark.getPosition().lng(),
            order: i,
          }
        })
      })

    }
  }

  computeUrl(result) {
    let myroute = result.routes[0];
    let path = myroute.overview_path;
    let url = `https://maps.googleapis.com/maps/api/staticmap?size=400x400&markers=label:S%7C${path[0].lat()},${path[0].lng()}&markers=label:E%7C${path[path.length - 1].lat()},${path[path.length - 1].lng()}`
    let pathUrl = `&path=color:0x0000ff80|weight:2|`
    let polyline = `enc:${myroute.overview_polyline}`
    let key = `&key=${window.googleAPIKey}`;
    url += pathUrl + polyline + key
    this.setState({ url: url });
  }

  computeTotalDistance(result) {
    let distance = 0;
    let myroute = result.routes[0];
    for (let i = 0; i < myroute.legs.length; i++) {
      distance += myroute.legs[i].distance.value;
    }

    distance = distance / 1000;
    distance = distance / 1.60934;
    distance = distance.toFixed(2);
    let time = (60 * distance / 4.43).toFixed(2);
    this.setState({ duration: time * 60, distance: distance })
    document.getElementById('duration').innerHTML = this.displayTime(time);
    document.getElementById('distance').innerHTML = distance + ' mi';
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

  displayTime(minutes) {
    let hour = Math.floor(minutes / 60);
    let min = Math.floor(minutes % 60);
    let sec = minutes % 1;
    sec = Math.floor(60 * sec);
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  handleSave(e) {
    e.preventDefault();
    this.props.openModal('updateRoute');
  }

  render() {
    return (
      <div>
        <Modal routeInfo={this.state} prevRoute={this.props.currentRoute} prevLocations={this.props.prevLocations}/>
        <div>
          <div className='route-navbar'>
            <section className='route-nav-left'>
              <Link className="logo" to="/dashboard">STREBEN</Link>
              <h1>ROUTE BUILDER</h1>
            </section>
            <section>
              <Link className='exit-btn' to='/routes'>Exit Builder</Link>
            </section>
          </div>
          <div className='route-toolbar'>
            <div className='toolbar-btn'>
              <div className='toolbar-btn-icon'></div>
              <div className='toolbar-btn-label'>Undo</div>
            </div>
            <div className='toolbar-btn'>
              <div className='toolbar-btn-icon'></div>
              <div className='toolbar-btn-label'>Redo</div>
            </div>
            <div className='toolbar-btn'>
              <div className='toolbar-btn-icon'></div>
              <div className='toolbar-btn-label'>Clear</div>
            </div>
            <button className='btn' disabled={this.markersArr.length < 2} onClick={this.handleSave}>Save</button>
          </div>
        </div>
        <div id="map" ref='map'></div>
        <div id="right-panel">
          <ul className='stats'>
            <label>Est. Time
              <li id='duration'></li>
            </label>
            <label>Distance
              <li id='distance'></li>
            </label>
            <label>Elevation Gain
              <li id='elevation'></li>
            </label>
          </ul>
        </div>
      </div>
    )
  }
}

export default RouteMap;
