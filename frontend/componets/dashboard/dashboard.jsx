import React from 'react';
import ActivityFeedItem from './activity_feed_item';
import { Link } from 'react-router-dom';
import LoadingIcon from '../loading/loading_icon';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
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

  createLikesObj() {
    let { likes, currentUser, users } = this.props;
    let counter = {};
    likes.forEach(like => {
      counter[like.workoutId] = counter[like.workoutId] || {};
      let liked = like.userId === currentUser.id ? true : false;
      if (counter[like.workoutId].likes) {
        counter[like.workoutId].likes.push(users[like.userId])
      } else {
        counter[like.workoutId].likes = [users[like.userId]];
      }
      
      if (liked) {
        counter[like.workoutId].liked = true;
        counter[like.workoutId].likeId = like.id;
      }
    });
    return counter;
  }

  createCommentsObj() {
    const { comments, users } = this.props;
    let obj = {};
    comments.forEach(comment => { 
      comment.username = users[comment.userId].username;
      comment.photoUrl = users[comment.userId].photoUrl;
      let workout = comment.workoutId;
      if (obj[workout]) {
        obj[workout].push(comment);
      } else {
        obj[workout] = [comment];
      }
    })
    return obj;
  }

  profilePic() {
    const { currentUser, users } = this.props;

    return currentUser.photoUrl ? <img className="avatar-image" src={currentUser.photoUrl} /> :
      <section className="avatar-image blank">
        <h1 className="blank-pic">{currentUser.username[0].toUpperCase()}</h1>
      </section> 
  }

  render() {
    let { currentUser, users, follows, workouts, createLike, deleteLike, createComment, deleteComment, openModal, loading } = this.props;
    let followersCount = 0, followingCount = 0, followsArr = [];
    
    if (loading) return <div className="dashboard-home"><LoadingIcon /></div> 

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
    let likesObj = this.createLikesObj();
    let commentObj = this.createCommentsObj();
    
    const workoutsDisplay = activityFeed.map((workout, i) => {
      let likes = likesObj[workout.id] ? likesObj[workout.id].likes : [];
      let liked = likesObj[workout.id] ? likesObj[workout.id].liked : false;
      let likeId = likesObj[workout.id] ? likesObj[workout.id].likeId ? likesObj[workout.id].likeId : null : null;
      let comments = commentObj[workout.id] ? commentObj[workout.id] : [];
      workout.username = users[workout.userId].username;
      if (users[workout.userId].photoUrl) workout['photoUrl'] = users[workout.userId].photoUrl;

      return (
        <ActivityFeedItem
          user={users[workout.userId]}
          currentUser={currentUser}
          workout={workout}
          createLike={createLike}
          deleteLike={deleteLike}
          createComment={createComment}
          deleteComment={deleteComment}
          likes={likes}
          liked={liked}
          likeId={likeId}
          comments={comments}
          openModal={openModal}
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
              {this.profilePic()}
              <section className="profile-main-text">
                <Link className="profile-link" to={`/athletes/${currentUser.id}`}>
                  <h1>{currentUser.username}</h1>
                </Link>
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
                    <h2>{totDistance.toFixed(2)} mi</h2>
                  </section>
                  <section className="total-stats-stat">
                    <label>Elevation</label>
                  <h2>{totElevation.toFixed(2)} ft</h2>
                  </section>
                  <section className="total-stats-stat">
                    <label>Time</label>
                    <h2>{this.displayTime(totDuration)}</h2>
                  </section>
                </div>
              </div>
            <Link className='dashboard-link' to='/training'>
              <h3>Your Activity Log</h3> 
              <span className='chevron-container'>
                <i className="fas fa-chevron-right"></i>
              </span>
            </Link>
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
