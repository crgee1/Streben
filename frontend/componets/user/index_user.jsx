import React from 'react';
import IndexUserItem from './index_user_item';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, friendships, currentUser, createFriendship, deleteFriendship } = this.props;
    const friendshipsObject = {};
    friendships.forEach(el => friendshipsObject[el.friendId] = el)
    const friends = friendships.map(el => el.friendId);
    const usersList = users.map((user, i) => 
      <IndexUserItem
        currentUser={currentUser}
        user={user}
        friends={friends}
        friendships={friendshipsObject}
        createFriendship={createFriendship}
        deleteFriendship={deleteFriendship}
        key={i}
      />
    )
    return (
      <div className='userIndex-main'>
        {usersList}
      </div>
    )
  }
}

export default UsersIndex;
