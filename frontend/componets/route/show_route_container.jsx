import { connect } from 'react-redux';
import ShowRoute from './show_route';
import { fetchRoute } from '../../actions/route_actions';
import { fetchLocations } from '../../actions/location_actions';

const mapStatetoProps = (state, ownProps) => {
  const route = state.entities.routes[ownProps.match.params.routeId];
  let locations;
  if (route === undefined) {
    locations = {};
  } else {
    locations = state.entities.locations
  }
  return ({
    currentUser: state.session.currentUser,
    // prevLocations: Object.values(locations).filter(location => location.route_id === parseInt(ownProps.match.params.routeId)),
    locations,
    route,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id)),
  fetchLocations: () => dispatch(fetchLocations()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowRoute)
