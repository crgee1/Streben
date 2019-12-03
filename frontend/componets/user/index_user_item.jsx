import React from 'react';
import { Link } from 'react-router-dom';

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

  profilePic() {
    const { user } = this.props;

    return user.photoUrl ? <img className="avatar-image-mid" src={user.photoUrl} /> :
      <section className="avatar-image-mid">
        <h1>{user.username[0].toUpperCase()}</h1>
      </section>
  }

  render() {
    const { user, followees, i } = this.props;
    const follow = followees.includes(user.id) ? 
      <button className='follow-btn' onClick={this.handleUnfollow}>Unfollow</button> :
      <button className='follow-btn' onClick={this.handleFollow}>Follow</button>;
    return (
      <div className={i % 2 === 0 ? 'userIndex-item' : 'userIndex-item dark'}>
        {this.profilePic()}
        <section className='userIndex-item-info'>
          <div className='userIndex-item-name'>                
          <Link className="profile-link" to={`/athletes/${user.id}`}>
            {user.username}
          </Link>
          </div>
          {follow}
        </section>
        <section className='userIndex-item-count'>
          <label>Activities</label>
          <div>
            {user.activitiesCount}
          </div>
        </section>
        <section className='userIndex-item-count'>
          <label>Routes</label>
          <div>
            {user.routesCount}
          </div>
        </section>
      </div>
    )
  }
}

export default IndexUserItem;
