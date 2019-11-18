import React from 'react';
import { Link } from 'react-router-dom';

class ActivityFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonCreate = this.handleButtonCreate.bind(this);
    this.handleButtonDelete = this.handleButtonDelete.bind(this);
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`;
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
  }

  handleButtonCreate() {
    let {createLike, currentUser, workout} = this.props;
    createLike({user_id: currentUser.id, workout_id: workout.id});
  }
  handleButtonDelete() {
    this.props.deleteLike(this.props.likeId);
  }

  displayDate(inputDate) {
    let result = [];
    let date = new Date(...inputDate.split('-'));
    const days = {
      0: "Monday",
      1: "Tuesday",
      2: "Wednesday",
      3: "Thursday",
      4: "Friday",
      5: "Saturday",
      6: "Sunday",
    };
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    result.push(`${months[date.getMonth()]} ${date.getDate()}`);
    result.push(date.getFullYear());
    return result.join(", ");
  }

  render() {
    const { distance, elevation, duration, description, name, id, createDate, liked } = this.props.workout;
    const { user, likes } = this.props;
    const button = liked ? <button onClick={this.handleButtonDelete}>
      <i className="fas fa-thumbs-up"></i>
    </button> : 
      <button onClick={this.handleButtonCreate}>
        <i className="far fa-thumbs-up"></i>
      </button>
    return (
      <div className="activity-feed-item">
        <div className="activity-info">
          <section className="avatar-image-mini">
            <h1>{user.username[0]}</h1>
          </section>
          <section>
            <header className="feed-item-header">
              <h2>{user.username}</h2>
              <label>{this.displayDate(createDate)}</label>
            </header>
            <div className="feed-item-name">
              <Link to={`training/${id}`}>{name}</Link>
            </div>
            <div className="feed-item-desc">
              <p>{description}</p>
            </div>
            <div className="feed-item-stats">
              <section>
                <label>Distance</label>
                <h3>{distance} mi</h3>
              </section>
              <section>
                <label>Elevation</label>
                <h3>{elevation} ft</h3>
              </section>
              <section>
                <label>Time</label>
                <h3>{this.displayTime(duration)}</h3>
              </section>
            </div>
          </section>
        </div>
        <div className="user-feedback">
          <div className="comment-section">
            {likes}{button}
          </div>
        </div>
      </div>
    )
  }
}

export default ActivityFeedItem;
