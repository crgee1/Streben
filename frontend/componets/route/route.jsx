import { Map, GoogleApiWrapper, GoogleMap, withGoogleMap, DirectionsRenderer } from 'google-maps-react';
import React from 'react';
import { Link } from 'react-router-dom';
import RouteIndexItem from './route_index_item';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoutes();
  }

  render() {
    const index = this.props.allRoutes.map((route, i) => (
      <RouteIndexItem 
        key={i}
        route={route}
        deleteRoute={this.props.deleteRoute}
      />
    ))
    return (
      <div className='route-home'>
        <div className='route-header'>
          <h1>My Routes</h1>
          <Link className='btn-primary' to='routes/new'>Create New Route</Link>
        </div>
        <div className='route-index'>
          {index}
        </div>
      </div>
    )
  }
}
export default RouteMap;