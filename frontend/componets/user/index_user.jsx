import React from 'react';

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.users.map((user, i) => 
    <div key={i}>
      {user.username}
      <button className='btn'>Follow</button>
    </div>
    )
    return (
      <div className='usersIndex-main'>
        {users}
      </div>
    )
  }
}

export default UsersIndex;
