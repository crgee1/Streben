import { connect } from 'react-redux';
import EditRoute from './edit_route';
import { openModal } from '../../actions/modal_actions';
import { fetchRoute } from '../../actions/route_actions';
import { fetchLocations } from '../../actions/location_actions';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.routeId;
  return {
    prevLocations: Object.values(state.entities.locations).filter(location => location.routeId === parseInt(id)),
    currentRoute: state.entities.routes[id],
    errors: state.errors.routes,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id)),
  openModal: modal => dispatch(openModal(modal)),
  fetchLocations: () => dispatch(fetchLocations()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditRoute);
