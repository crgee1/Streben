import { connect } from 'react-redux';
import IndexUser from './index_user';
import { fetchUsers, } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStatetoProps = state => {
  const { currentUser } = state.session;
  return ({
    currentUser,
    follows: Object.values(state.entities.follows),
    users: Object.values(state.entities.users)
      .filter(user => user.id !== currentUser.id),
  })
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(IndexUser);
