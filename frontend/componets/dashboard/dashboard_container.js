import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchFollows } from '../../actions/follow_actions';

const mapStateToProps = (state) => ({
    users: state.entities.users,
    currentUser: state.session.currentUser,
    workouts: Object.values(state.entities.workouts),
    follows: Object.values(state.entities.follows)
})

const mapDispatchToProps = dispatch => ({
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchFollows: () => dispatch(fetchFollows()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
