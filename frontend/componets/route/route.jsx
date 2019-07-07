import { Map, GoogleApiWrapper, GoogleMap, withGoogleMap, DirectionsRenderer } from 'google-maps-react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='route-home'>
        <div className='route-header'>
          <h1>My Routes</h1>
          <Link className='btn' to='routes/new'>Create New Route</Link>
        </div>
      </div>
    )
  }
}
export default RouteMap;