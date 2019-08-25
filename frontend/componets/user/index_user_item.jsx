import React from 'react';

class IndexUserItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, friends } = this.props;
    console.log(this.props)
    const follow = friends.includes(user.username) ? 
      <button className='btn'>Unfollow</button> :
      <button className='btn'>Follow</button>;
    return (
      <div>
        <div>{user.username}</div>
        {follow}
      </div>
    )
  }
}

export default IndexUserItem;
