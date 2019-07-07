import { Map, GoogleApiWrapper, GoogleMap, withGoogleMap, DirectionsRenderer } from 'google-maps-react';
import React from 'react';
import { Link } from 'react-router-dom';

// function initMap() {
//   let map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 16,
//     center: { lat: 37.7989687, lng: -122.4024461 }  // 825 Battery
//   });
//   let directionsService = new google.maps.DirectionsService;
//   let directionsDisplay = new google.maps.DirectionsRenderer({
//     draggable: true,
//     map: map,
//     // panel: document.getElementById('right-panel')
//   });

//   google.maps.event.addListener(map, 'click', (event) => {
//     placeMarker(event.latLng);
//   });

//   let markerArr = [];
//   function placeMarker(location) {
//     var marker = new google.maps.Marker({
//       position: location,
//     });
//     marker.setMap(map);
//     markerArr.push(marker);
//     if (markerArr.length >= 2) {
//       markerArr[0].setMap(null);
//       markerArr[markerArr.length - 1].setMap(null);
//       displayRoute(markerArr[0].position, markerArr[markerArr.length - 1].position, directionsService, directionsDisplay);
//       // displayRoute('San Francisco, CA', 'Daly City, CA', directionsService, directionsDisplay);
//     }
//   }

//   directionsDisplay.addListener('directions_changed', function () {
//     computeTotalDistance(directionsDisplay.getDirections());
//   });

// }

// function displayRoute(origin, destination, service, display) {
//   service.route({
//     origin: origin,
//     destination: destination,
//     // waypoints: [{ location: 'Adelaide, SA' }, { location: 'Broken Hill, NSW' }],
//     travelMode: 'WALKING',
//     // unitSystem: google.maps.UnitSystem.IMPERIAL,
//     avoidTolls: true
//   }, function (response, status) {
//     if (status === 'OK') {
//       display.setDirections(response);
//     } else {
//       alert('Could not display directions due to: ' + status);
//     }
//   });
// }

// function computeTotalDistance(result) {
//   let distance = 0;
//   let myroute = result.routes[0];
//   for (let i = 0; i < myroute.legs.length; i++) {
//     distance += myroute.legs[i].distance.value;
//   }
//   distance = distance / 1000;
//   distance = distance / 1.60934;
//   distance = distance.toFixed(2);
//   let time = (60 * distance / 4.43).toFixed(2);

//   document.getElementById('duration').innerHTML = displayTime(time);
//   document.getElementById('distance').innerHTML = distance + ' mi';
// }

// function displayTime(minutes) {
//   let hour = Math.floor(minutes / 60);
//   let min = Math.floor(minutes%60);
//   let sec = minutes % 1;
//   sec = Math.floor(60 * sec);
//   if (sec < 10) sec = `0${sec}`;
//   if (hour >= 1 && min < 10) min = `0${min}`
//   return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
// }

// window.initMap = initMap;

class RouteMap extends React.Component {
  constructor(props) {
    super(props);

    this.markersArr = [];
    this.placeMarker = this.placeMarker.bind(this);
    this.displayRoute = this.displayRoute.bind(this);
    this.displayTime = this.displayTime.bind(this);
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
  }
  componentDidMount() {
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
      this.computeTotalDistance(this.directionsRender.getDirections());
    });
  }

  placeMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
    });
    marker.setMap(this.map);
    this.markersArr.push(marker);
    if (this.markersArr.length >= 2) {
      this.markersArr.forEach(mark => mark.setMap(null));
      this.displayRoute(this.markersArr[0].position, this.markersArr[this.markersArr.length - 1].position, this.markersArr.slice(1, this.markersArr.length-1), this.directionsService, this.directionsRender);
    }
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

    document.getElementById('duration').innerHTML = this.displayTime(time);
    document.getElementById('distance').innerHTML = distance + ' mi';
  }

  displayRoute(origin, destination, midpoints, service, render) {
    service.route({
      origin: origin,
      destination: destination,
      waypoints: midpoints.map(mark => ({location: mark.position})),
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
    let min = Math.floor(minutes%60);
    let sec = minutes % 1;
    sec = Math.floor(60 * sec);
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  render() {
    return (
      <div>
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
            <button className='btn'>Save</button>
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
            <label>Elevation
              <li id='elevation'></li>
            </label>
          </ul>
        </div>
      </div>
    )
  }
}

export default RouteMap;
