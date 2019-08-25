import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchFriendships } from '../../actions/friendship_actions';

const mapStateToProps = (state) => ({
    users: state.entities.users,
    currentUser: state.session.currentUser,
    workouts: Object.values(state.entities.workouts),
    friends: Object.values(state.entities.friendships)
})

const mapDispatchToProps = dispatch => ({
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchFriendships: () => dispatch(fetchFriendships()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
