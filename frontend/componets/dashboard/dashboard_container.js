import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchFollows } from '../../actions/follow_actions';
import { createLike } from '../../actions/like_actions';
import { deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state) => ({
    users: state.entities.users,
    currentUser: state.session.currentUser,
    workouts: Object.values(state.entities.workouts),
    follows: Object.values(state.entities.follows),
    likes: Object.values(state.entities.likes)
})

const mapDispatchToProps = dispatch => ({
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchFollows: () => dispatch(fetchFollows()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
