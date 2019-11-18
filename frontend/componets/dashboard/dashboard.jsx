import React from 'react';
import ActivityFeedItem from './activity_feed_item';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchWorkouts();
    this.props.fetchFollows();
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`;
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
  }

  likeCounter() {
    let { likes, currentUser } = this.props;
    let counter = {};
    likes.forEach(like => {
      counter[like.workoutId] = counter[like.workoutId] || {};
      let liked = like.userId === currentUser.id ? true : false;
      counter[like.workoutId].likes = counter[like.workoutId].likes ? counter[like.workoutId].likes+1 : 1;
      if (liked) {
        counter[like.workoutId].liked = true;
        counter[like.workoutId].likeId = like.id;
      }
    });
    return counter;
  }

  render() {
    let { currentUser, users, follows, workouts, createLike, deleteLike } = this.props;
    let followersCount = 0, followingCount = 0, followsArr = [];
    follows.forEach(follow => {
      followsArr.push(follow.userId);
      if (follow.userId === currentUser.id) followersCount += 1;
      if (follow.followerId === currentUser.id) followingCount += 1;
    });
    let activityFeed = [], workoutArr = [];
    workouts.forEach(workout => {
      if (workout.userId === currentUser.id) workoutArr.push(workout);
      if (workout.userId === currentUser.id || followsArr
        .includes(workout.userId)) activityFeed.push(workout);
      });
      activityFeed.sort((a, b) => b.createDate > a.createDate ? 1 : -1);
    let likeCounterObj = this.likeCounter();
    const workoutsDisplay = activityFeed.map((workout, i) => {
      let likesCount = likeCounterObj[workout.id] ? likeCounterObj[workout.id].likes : 0;
      let liked = likeCounterObj[workout.id] ? likeCounterObj[workout.id].liked : false;
      let likeId = likeCounterObj[workout.id] ? likeCounterObj[workout.id].likeId ? likeCounterObj[workout.id].likeId : null : null;
      return (
        <ActivityFeedItem
          user={users[workout.userId]}
          currentUser={currentUser}
          workout={workout}
          createLike={createLike}
          deleteLike={deleteLike}
          likes={likesCount}
          liked={liked}
          likeId={likeId}
          key={i}
        />
      )});

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
                <div>
                  <section className="total-stats-stat">
                    <label>Following</label>
                    <h2>{followingCount}</h2>
                  </section>
                  <section className="total-stats-stat">
                    <label>Followers</label>
                    <h2>{followersCount}</h2>
                  </section>
                  <section className="total-stats-stat">
                    <label>Activities</label>
                    <h2>{workoutArr.length}</h2>
                  </section>
                </div>
                <div>
                  <section className="total-stats-stat">
                    <label>Distance</label>
                    <h2>{totDistance} mi</h2>
                  </section>
                  <section className="total-stats-stat">
                    <label>Elevation</label>
                    <h2>{totElevation} ft</h2>
                  </section>
                  <section className="total-stats-stat">
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
            {workoutsDisplay}
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
