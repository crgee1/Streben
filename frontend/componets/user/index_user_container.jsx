import { connect } from 'react-redux';
import IndexUser from './index_user';
import { fetchUsers, } from '../../actions/user_actions';

const mapStatetoProps = state => {
  const { currentUser } = state.session;
  return ({
    currentUser,
    friends: Object.values(state.entities.friendships),
    users: Object.values(state.entities.users)
      .filter(user => user.id !== currentUser.id),
  })
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(IndexUser);
