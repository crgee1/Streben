import { Map, GoogleApiWrapper, GoogleMap, withGoogleMap, DirectionsRenderer } from 'google-maps-react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: { lat: 37.7989687, lng: -122.4024461 }  // Australia.
  });
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer({
    draggable: true,
    map: map,
    // panel: document.getElementById('right-panel')
  });

  directionsDisplay.addListener('directions_changed', function () {
    computeTotalDistance(directionsDisplay.getDirections());
  });

  displayRoute('San Francisco, CA', 'Daly City, CA', directionsService,
    directionsDisplay);


  google.maps.event.addListener(map, 'click', (event) => {
    console.log(event.latLng.lat());
    placeMarker(event.latLng);
  });

  function placeMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map,
    });
  }

}

function displayRoute(origin, destination, service, display) {
  service.route({
    origin: origin,
    destination: destination,
    // waypoints: [{ location: 'Adelaide, SA' }, { location: 'Broken Hill, NSW' }],
    travelMode: 'WALKING',
    avoidTolls: true
  }, function (response, status) {
    if (status === 'OK') {
      display.setDirections(response);
    } else {
      alert('Could not display directions due to: ' + status);
    }
  });
}

function computeTotalDistance(result) {
  let distance = 0;
  let myroute = result.routes[0];
  for (let i = 0; i < myroute.legs.length; i++) {
    distance += myroute.legs[i].distance.value;
  }
  distance = distance / 1000;
  distance = distance / 1.60934;
  distance = distance.toFixed(2);
  let time = (60 * distance / 4.43).toFixed(2);

  document.getElementById('duration').innerHTML = time;
  document.getElementById('distance').innerHTML = distance;
}

window.initMap = initMap;

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='route-navbar'>
          <Link className="logo" to="/dashboard">STREBEN</Link>
        </div>
        <div id="map"></div>
        <div id="right-panel">
          <ul className='stats'>
              <label>Est. Time
                <li id='duration'></li>
            </label>
            <label>Distance
              <li id='distance'></li>
            </label>
          </ul>
        </div>
        <Helmet>
            <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${window.googleAPIKey}&callback=initMap`}>
            </script>
        </Helmet>
      </div>
    )
  }
}
export default RouteMap;