import React from 'react';
import { Link } from 'react-router-dom';

class ActivityFeedItem extends React.Component {

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  render() {
    const { distance, elevation, duration, description, name, id } = this.props.workout;
    const { user } = this.props;
    return (
      <div className='activity-feed-item'>
        <header className='feed-item-header'>
          <h2>{user.username}</h2>
        </header>
        <div className='feed-item-name'>
          <Link to={`training/${id}`}>{name}</Link>
        </div>
        <div className='feed-item-desc'>
          <p>{description}</p>
        </div>
        <div className='feed-item-stats'>
          <section>
            <label>Distance</label>
            <h3>{distance}</h3>
          </section>
          <section>
            <label>Elevation</label>
            <h3>{elevation}</h3>
          </section>
          <section>
            <label>Time</label>
            <h3>{this.displayTime(duration)}</h3>
          </section>
        </div>
      </div>
    )
  }
}

export default ActivityFeedItem;