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
    this.computeTotalDistance = this.computeTotalDistance.bind(this);
    this.plotElevation = this.plotElevation.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.computeUrl = this.computeUrl.bind(this);
    this.drawRoute = this.drawRoute.bind(this);

    this.handleClear = this.handleClear.bind(this);
    this.handleRedo = this.handleRedo.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
  }
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      zoom: 16,
      center: { lat: 37.7989687, lng: -122.4024461 }  // 825 Battery
    });

    this.elevationService = new google.maps.ElevationService;
    this.directionsService = new google.maps.DirectionsService;
    this.directionsRender = new google.maps.DirectionsRenderer({
      // draggable: true,
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
      const result = this.directionsRender.getDirections();
      if (result !== null) {
        this.elevationService.getElevationAlongPath({ path: path, samples: 10, }, this.plotElevation)
        this.computeUrl(result);
        this.computeTotalDistance(result);
      }
    });
  }

  plotElevation(elevations, status) {
    let sum = 0;
    for (let i = 0; i < elevations.length - 1; i++) {
      let cur = elevations[i].elevation;
      let next = elevations[i+1].elevation;
      if (cur < next) {
        sum += (next - cur);
      }
      const elevation = Math.round(sum);
      this.setState({ elevation });
      document.getElementById('elevation').innerHTML = elevation + ' ft';
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
    let marker = new google.maps.Marker({
      position: location,
    });
    marker.setMap(this.map);
    this.markersArr.push(marker);
    if (this.markersArr.length >= 2) {
      this.drawRoute();
    }
  }

  computeUrl(result) {
    let myroute = result.routes[0];
    let path = myroute.overview_path;
    let url = `https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C${path[0].lat()},${path[0].lng()}&markers=label:E%7C${path[path.length - 1].lat()},${path[path.length - 1].lng()}`
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
    this.setState({ duration: time*60, distance: distance })
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

  drawRoute() {
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

  handleSave(e) {
    e.preventDefault();
    this.props.openModal('saveRoute');
  }

  handleRedo() {

  }

  handleUndo() {
    if (this.markersArr.length === 1) {
      this.markersArr.pop().setMap(null);
    } else if (this.markersArr.length === 2) {
      const marker = this.markersArr[0];
      this.handleClear();
      this.placeMarker(marker.position)
    } else if (this.markersArr.length > 2) {
      this.markersArr.pop().setMap(null);
      this.drawRoute();
    }
  }

  handleClear() {
    this.directionsRender.set('directions', null);
    this.markersArr = [];
    document.getElementById('duration').innerHTML = '';
    document.getElementById('distance').innerHTML = '';
    document.getElementById('elevation').innerHTML = '';
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
              <div className='toolbar-btn-label' onClick={this.handleUndo}>Undo</div>
            </div>
            <div className='toolbar-btn'>
              <div className='toolbar-btn-icon'></div>
              <div className='toolbar-btn-label'>Redo</div>
            </div>
            <div className='toolbar-btn'>
              <div className='toolbar-btn-icon'></div>
              <div className='toolbar-btn-label' onClick={this.handleClear}>Clear</div>
            </div>
            <button className={'btn' + (this.markersArr.length < 2 ? ' disabled' : '')} disabled={this.markersArr.length < 2}onClick={this.handleSave}>Save</button>
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
