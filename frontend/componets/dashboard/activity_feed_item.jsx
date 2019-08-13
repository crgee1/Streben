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

  displayDate(inputDate) {
    let result = [];
    let date = new Date(inputDate);
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    }
    result.push(`${months[date.getMonth()]} ${date.getDate() + 1}`);
    result.push(date.getFullYear());
    return result.join(', ')
  }

  render() {
    const { distance, elevation, duration, description, name, id, createDate } = this.props.workout;
    const { user } = this.props;
    return (
      <div className='activity-feed-item'>
        <header className='feed-item-header'>
          <h2>{user.username}</h2>
          <label>{this.displayDate(createDate)}</label>
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
      </div>
    )
  }
}

export default ActivityFeedItem;