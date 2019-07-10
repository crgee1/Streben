import { connect } from 'react-redux';
import ShowRoute from './show_route';
import { fetchRoute } from '../../actions/route_actions';
import { fetchLocations } from '../../actions/location_actions';

const mapStatetoProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    prevLocations: Object.values(state.entities.locations).filter(location => location.route_id === parseInt(ownProps.match.params.routeId)),
    route: state.entities.routes[ownProps.match.params.routeId],
  })
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id)),
  fetchLocations: () => dispatch(fetchLocations()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowRoute)
