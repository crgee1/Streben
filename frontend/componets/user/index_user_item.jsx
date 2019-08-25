import React from 'react';

class IndexUserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      friend_id: this.props.user.id
    }

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow() {
    this.props.createFriendship(this.state);
  }

  handleUnfollow() {
    this.props.deleteFriendship(this.props.friendships[this.props.user.id].id);
  }

  render() {
    const { user, friends } = this.props;
    const follow = friends.includes(user.id) ? 
      <button className='btn' onClick={this.handleUnfollow}>Unfollow</button> :
      <button className='btn' onClick={this.handleFollow}>Follow</button>;
    return (
      <div className='userIndex-item'>
        <section className='avatar-image-mini'>
          <h1>{user.username[0]}</h1>
        </section>
        <div>{user.username}</div>
        {follow}
      </div>
    )
  }
}

export default IndexUserItem;
