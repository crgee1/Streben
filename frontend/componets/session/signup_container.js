import { connect } from 'react-redux';
import { signUp, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up'
})

const mapDispatchToProps = dispatch => ({
    submitAction: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
