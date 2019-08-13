import { connect } from 'react-redux';
import ShowRoute from './show_route';
import { fetchRoute } from '../../actions/route_actions';
import { fetchLocations } from '../../actions/location_actions';

const mapStatetoProps = (state, ownProps) => {
  const route = state.entities.routes[ownProps.match.params.routeId];
  let locations;
  if (route === undefined) {
    locations = [];
  } else {
    locations = Object.values(state.entities.locations).filter( (location) => {
      return location.routeId === Number(ownProps.match.params.routeId)
    })
  }
  return ({
    currentUser: state.session.currentUser,
    locations,
    route,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id)),
  fetchLocations: () => dispatch(fetchLocations()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowRoute)
