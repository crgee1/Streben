import { connect } from 'react-redux';
import NewRoute from './new_route';
import { openModal } from '../../actions/modal_actions';
import { createLocation } from '../../actions/location_actions';

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  createLocation: location => dispatch(createLocation(location)),
})

export default connect(null, mapDispatchToProps)(NewRoute);