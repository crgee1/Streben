import { connect } from 'react-redux';
import ShowMap from './show_map';
import { fetchRoute } from '../../actions/route_actions';
import { fetchLocations } from '../../actions/location_actions';

const mapStateToProps = (state, ownProps) => {
  // let id = ownProps.match.params.routeId;
  return {
  //   prevLocations: Object.values(state.entities.locations).filter(location => location.route_id === parseInt(id)),
    // route: state.entities.routes[id],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id)),
  fetchLocations: () => dispatch(fetchLocations()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowMap);
