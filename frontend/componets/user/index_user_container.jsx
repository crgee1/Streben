import { connect } from 'react-redux';
import IndexUser from './index_user';
import { fetchUsers, } from '../../actions/user_actions';
import { fetchWorkouts, } from '../../actions/workout_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStatetoProps = state => {
  const { currentUser } = state.session;
  const { workouts } = state.entities;
  return ({
    currentUser,
    follows: Object.values(state.entities.follows),
    users: Object.values(state.entities.users)
      .filter(user => user.id !== currentUser.id),
    recentWorkouts: Object.values(workouts).reverse()
      .filter(workout => currentUser.id === workout.userId)
      .sort((a, b) => b.createDate > a.createDate ? 1 : -1),
  })
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchWorkouts: () => dispatch(fetchWorkouts()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(IndexUser);
