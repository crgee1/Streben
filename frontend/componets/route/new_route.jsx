import { Map, GoogleApiWrapper, GoogleMap, withGoogleMap } from 'google-maps-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../componets/modal/modal';

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
      let path = this.markersArr.map(mark => ({ 
        lat: mark.getPosition().lat(), 
        lng: mark.getPosition().lng() 
      }));

      this.elevationService.getElevationAlongPath({ path: path, samples: 50, }, this.plotElevation)
      this.computeTotalDistance(this.directionsRender.getDirections(), );
    });
  }

  plotElevation(elevations, status) {
    let pointsArr = elevations.map(point => {
      let lat = point.location.lat();
      let lng = point.location.lng();
      return [lat, lng];
    })

    let url = `https://maps.googleapis.com/maps/api/staticmap?size=400x400&markers=%7C${pointsArr[0][0]},${pointsArr[0][1]}&markers=%7C${pointsArr[pointsArr.length-1][0]},${pointsArr[pointsArr.length-1][1]}`    
    let key = `&key=${window.googleAPIKey}`;
    url += key
  console.log(url);

    let sum = 0;
    for (let i = 0; i < elevations.length - 1; i++) {
      let cur = elevations[i].elevation;
      let next = elevations[i+1].elevation;
      if (cur < next) {
        sum += (next - cur);
      }
      this.setState({ elevation: Math.round(sum) })
      document.getElementById('elevation').innerHTML = Math.round(sum) + ' ft';
    }

    // var chartDiv = document.getElementById('elevation_chart');
    // if (status !== 'OK') {
      // Show the error code inside the chartDiv.
      // chartDiv.innerHTML = 'Cannot show elevation: request failed because ' +
      //   status;
    //   return;
    // }
    // Create a new chart in the elevation_chart DIV.
    // var chart = new google.visualization.ColumnChart(chartDiv);

    // Extract the data from which to populate the chart.
    // Because the samples are equidistant, the 'Sample'
    // column here does double duty as distance along the
    // X axis.
    // var data = new google.visualization.DataTable();
    // data.addColumn('string', 'Sample');
    // data.addColumn('number', 'Elevation');
    // for (var i = 0; i < elevations.length; i++) {
    //   data.addRow(['', elevations[i].elevation]);
    // }

    // Draw the chart using the data within its DIV.
    // chart.draw(data, {
    //   height: 150,
    //   legend: 'none',
    //   titleY: 'Elevation (m)'
    // });
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
    this.setState({ duration: time, distance: distance })
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

  handleSave(e) {
    e.preventDefault();
    this.props.openModal('saveRoute');
    // console.log(this.markersArr)
    // console.log(this.markersArr[0].getPosition().lat())
    // console.log(this.markersArr.map((mark, i) => ({
    //   latitude: mark.getPosition().lat(),
    //   longitude: mark.getPosition().lng(),
    //   order: i,
    // })))
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <Modal routeInfo={this.state}/>
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
            <button className='btn' onClick={this.handleSave}>Save</button>
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
