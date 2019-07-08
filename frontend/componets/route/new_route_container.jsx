import { connect } from 'react-redux';
import NewRoute from './new_route';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(null, mapDispatchToProps)(NewRoute);