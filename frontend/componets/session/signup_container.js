import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session
})

const mapDispatchToProps = dispatch => ({
    signUp: user => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
