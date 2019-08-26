import React from 'react';

class IndexUserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user.id,
      follower_id: this.props.currentUser.id
    }

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow() {
    this.setState({
      user_id: this.props.user.id,
      follower_id: this.props.currentUser.id
    }, () => this.props.createFollow(this.state))
  }

  handleUnfollow() {
    const id = this.props.follows[this.props.user.id].id
    this.props.deleteFollow(id);
  }

  render() {
    const { user, followees } = this.props;
    const follow = followees.includes(user.id) ? 
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
