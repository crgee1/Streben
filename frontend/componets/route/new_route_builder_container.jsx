import { connect } from 'react-redux';
import NewRoute from './new_route_builder';
import { openModal } from '../../actions/modal_actions';
import { createLocation, fetchLocations } from '../../actions/location_actions';

const mapStateToProps = (state, ownProps) => ({
  currentRoute: state.entities.routes,
  prevLocations: Object.values(state.entities.locations).filter(location => location.route_id === currentRoute.id)
})

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id)),
  fetchLocations: () => dispatch(fetchLocations()),
  openModal: modal => dispatch(openModal(modal)),
  createLocation: location => dispatch(createLocation(location)),
})

export default connect(null, mapDispatchToProps)(NewRoute);