import { connect } from 'react-redux';
import ShowUser from './show_user';
import { fetchUser, fetchUsers, } from '../../actions/user_actions';
import { fetchWorkouts } from '../../actions/workout_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStatetoProps = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.userId];
    let workouts = Object.values(state.entities.workouts);
    let routes = Object.values(state.entities.routes);
    let follows = Object.values(state.entities.follows);
    let { id } = state.session.currentUser;

    return {
        user,
        currentUser: state.session.currentUser,
        workouts,
        routes,
        follows,
        loading: state.ui.loading.indexLoading,
        recentWorkouts: Object.values(state.entities.workouts).reverse()
            .filter(el => id === el.userId)
            .sort((a, b) => b.createDate > a.createDate ? 1 : -1),
}}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchWorkouts: () => dispatch(fetchWorkouts())
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowUser);
