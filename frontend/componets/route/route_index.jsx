import React from 'react';
import { Link } from 'react-router-dom';
import RouteIndexItem from './route_index_item';
import ActivitiesFooter from '../footer/recent_activities_footer';

class RouteMap extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRoutes();
    this.props.fetchWorkouts();
  }

  render() {
    const index = this.props.allRoutes.filter(
      ele => ele.userId === this.props.currentUser.id).map((route, i) => (
      <RouteIndexItem 
        key={i}
        route={route}
        deleteRoute={this.props.deleteRoute}
      />
    ))
    return (
      <div>
        <div className='route-home'>
          <header className='route-header'>
            <h1>My Routes</h1>
            <Link className='btn-primary' to='routes/new'>Create New Route</Link>
          </header>
          <div className='route-index'>
            {index}
          </div>
        </div>
        <ActivitiesFooter workouts={this.props.recentWorkouts} />
      </div>
    )
  }
}
export default RouteMap;
