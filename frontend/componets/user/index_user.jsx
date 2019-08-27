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
    const { users, follows, currentUser, createFollow, deleteFollow } = this.props;
    const followsObject = {};
    follows.forEach(el => followsObject[el.userId] = el)
    const followees = follows.map(el => el.userId);
    const usersList = users.map((user, i) => 
      <IndexUserItem
        currentUser={currentUser}
        user={user}
        followees={followees}
        follows={followsObject}
        createFollow={createFollow}
        deleteFollow={deleteFollow}
        key={i}
        i={i}
      />
    );
    return (
      <div className='userIndex-main'>
        <header className='userIndex-header'>
          <h1>Athletes</h1>
        </header>
        {usersList}
      </div>
    )
  }
}

export default UsersIndex;
