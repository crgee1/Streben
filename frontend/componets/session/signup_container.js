import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import Signup from './signup';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign In'
})

const mapDispatchToProps = dispatch => ({
    submitAction: user => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
