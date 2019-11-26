import { connect } from 'react-redux';
import ShowUser from './show_user';
import { fetchUser, } from '../../actions/user_actions';
import { fetchWorkouts, } from '../../actions/workout_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStatetoProps = (state, ownProps) => {
    let user = state.entities.users[ownProps.match.params.userId] || {}
    return {
        user,
        currentUser: state.session.currentUser,
}}

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowUser);
