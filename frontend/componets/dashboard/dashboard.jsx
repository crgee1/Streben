import React from 'react';
import ActivityFeedItem from './activity_feed_item';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
    this.props.fetchFriendships();
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
    const { currentUser, users, friends } = this.props;
    const friendsArr = friends.map(friend => friend.friendId);
    let activityFeed = [];
    let workoutArr = [];
    this.props.workouts.forEach(workout => {
      if (workout.userId === currentUser.id) workoutArr.push(workout);
      if (workout.userId === currentUser.id || friendsArr.includes(workout.userId)) activityFeed.push(workout);
    })
    activityFeed.sort((a, b) => b.createDate > a.createDate ? 1 : -1);
    const workouts = activityFeed.map((workout, i) => (
      <ActivityFeedItem
        user={users[workout.userId]}
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
                <div>
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
              </div>
            <Link className='dashboard-link' to='/training'>Your Activity Log <span className='chevron-container'><i className="fas fa-chevron-right"></i></span></Link>
            </section>
          </div>
          <div className="activity-feed">
            <section className="banner" />
            {workouts}
          </div>
          <div className="advertise">
            <section>
              <div>
                <img className='linkedin' src={window.linkedinURL} />
              </div>
              <div>
                <label>LinkedIn</label>
                <p>
                  Like what you see? Check out my LinkedIn and see my profile.
                </p>
                <a
                  href="https://www.linkedin.com/in/christopher-gee-426527118"
                  className="personal-adver"
                  target="_blank"
                >
                  View My Profile
                </a>
              </div>
            </section>
            <section>
              <div>
                <img className='github' src={window.githubURL}/>
              </div>
              <div>
                <label>GitHub</label>
                <p>
                  Like what you see? Check out my GitHub and see my other projects.
                </p>
                <a
                  href="https://github.com/crgee1"
                  target="_blank"
                  className="personal-adver"
                >
                  View My Profile
                </a>
              </div>
            </section>
          </div>
      </div>
    );
  }
}

export default Dashboard;
