import React from 'react';
import ActivityFeedItem from './activity_feed_item';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`;
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
  }

  render() {
    const { currentUser, users } = this.props;
    const workoutArr = this.props.workouts.filter(
      workout => workout.user_id === currentUser.id
    );
    const workouts = workoutArr.reverse().map((workout, i) => (
      <ActivityFeedItem
        user={users[workout.user_id]}
        workout={workout}
        key={i}
      />
    ));

    const totDistance = workoutArr.reduce(
      (acc, cur) => acc + cur.distance, 0
    );
    const totElevation = workoutArr.reduce(
      (acc, cur) => acc + cur.elevation, 0
    );
    const totDuration = workoutArr.reduce(
      (acc, cur) => acc + cur.duration, 0
    );

    return (
      <div className="dashboard-home">
        <div className="personal-stats">
          <section className="profile-card">
            <section className="avatar-image">
              <h1>{this.props.currentUser.username[0]}</h1>
            </section>
            <section className="profile-main-text">
              <h1>{currentUser.username}</h1>
            </section>
            <div className="total-stats">
              <section>
                <label>Activities</label>
                <h2>{workoutArr.length}</h2>
              </section>
              <section>
                <label>Distance</label>
                <h2>{totDistance} mi</h2>
              </section>
              <section>
                <label>Elevation</label>
                <h2>{totElevation} ft</h2>
              </section>
              <section>
                <label>Time</label>
                <h2>{this.displayTime(totDuration)}</h2>
              </section>
            </div>
          </section>
        </div>
        <div className="activity-feed">
          <section className="banner" />
          {workouts}
        </div>
        <div className="advertise">
          <section>
            <a
              href="https://www.linkedin.com/in/christopher-gee-426527118"
              className="personal-adver"
            >
              Linkedin
            </a>
          </section>
          <section>
            <a href="https://github.com/crgee1" className="personal-adver">
              GitHub
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
