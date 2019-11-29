import { connect } from 'react-redux';
import ShowRoute from './show_route';
import { fetchRoute } from '../../actions/route_actions';
import { fetchLocations } from '../../actions/location_actions';

const mapStatetoProps = (state, ownProps) => {
  const route = state.entities.routes[ownProps.match.params.routeId];
  let locations, user;
  if (route === undefined) {
    locations = [];
    user = { username: '' };
  } else {
    user = state.entities.users[route.userId];
    locations = Object.values(state.entities.locations).filter( (location) => {
      return location.routeId === Number(ownProps.match.params.routeId);
    });
  }
  return ({
    currentUser: state.session.currentUser,
    loading: state.ui.loading.detailLoading,
    locations,
    route,
    user,
  })
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id)),
  fetchLocations: () => dispatch(fetchLocations()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowRoute);
