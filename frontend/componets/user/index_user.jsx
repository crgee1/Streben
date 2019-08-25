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
    let { users, friends } = this.props;
    friends = friends.map(el => el.username);
    const usersList = users.map((user, i) => 
      <IndexUserItem
        user={user}
        friends={friends}
        key={i}
      />
    )
    return (
      <div className='usersIndex-main'>
        {usersList}
      </div>
    )
  }
}

export default UsersIndex;
