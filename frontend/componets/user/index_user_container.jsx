import { connect } from 'react-redux';
import IndexUser from './index_user';
import { fetchUsers, } from '../../actions/user_actions';
import { createFriendship, deleteFriendship } from '../../actions/friendship_actions';

const mapStatetoProps = state => {
  const { currentUser } = state.session;
  return ({
    currentUser,
    friendships: Object.values(state.entities.friendships),
    users: Object.values(state.entities.users)
      .filter(user => user.id !== currentUser.id),
  })
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createFriendship: friendship => dispatch(createFriendship(friendship)),
  deleteFriendship: id => dispatch(deleteFriendship(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(IndexUser);
