import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchWorkouts } from '../../actions/workout_actions';
import { fetchFollows } from '../../actions/follow_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
    users: state.entities.users,
    loading: state.ui.loading.detailLoading,
    currentUser: state.session.currentUser,
    workouts: Object.values(state.entities.workouts),
    follows: Object.values(state.entities.follows),
    likes: Object.values(state.entities.likes),
    comments: Object.values(state.entities.comments)
})

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)), 
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchFollows: () => dispatch(fetchFollows()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
