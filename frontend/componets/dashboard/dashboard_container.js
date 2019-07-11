import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout, signUp } from '../../actions/session_actions';
import { fetchWorkouts } from '../../actions/workout_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    workouts: Object.values(state.entities.workouts)
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    signUp: (user) => dispatch(signUp(user)),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);