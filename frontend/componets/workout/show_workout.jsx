import React from 'react';
import RecentActivities from '../footer/recent_activities_footer';

class ShowWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.displayTime = this.displayTime.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`;
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
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
    result.push(days[date.getDay()]);
    result.push(`${months[date.getMonth()]} ${date.getDate()}`);
    result.push(date.getFullYear());
    return result.join(', ');
  }

  handleDelete() {
    this.props.deleteWorkout(this.props.match.params.workoutId)
      .then(() => this.props.history.push(`/training`));
  }

  handleEdit() {
    this.props.history.push(`/training/edit/${this.props.match.params.workoutId}`);
  }

  render() {
    const {workout, user, recentWorkouts, id} = this.props;
    const icons = id === workout.userId ? 
    <div className='icons'>
      <span onClick={this.handleEdit} className='show-workout-btn-edit'>
        <i className="far fa-edit"></i>
      </span>
      <span onClick={this.handleDelete}>
        <i className="far fa-trash-alt"></i>
      </span>
    </div> :
    null;
    const display = this.props.workout.id === 0 ? null : (<div className='show-workout-main'>
      {icons}
      <div className='show-workout-display'>
        <header><h1>{user.username} - {workout.workoutType}</h1></header>
        <div className='show-workout-info'>
          <section className='show-workout-left'>
            <section className='avatar-image'>
              <h1>
                {user.username[0]}
              </h1>
            </section>
            <section className='show-text'>
              <label className='show-workout-date'>{this.displayDate(workout.createDate)}</label>
              <h2>{workout.name}</h2>
              <p>{workout.description}</p>
            </section>
          </section>
          <section className='show-workout-right'>
            <section>
              <div>
                <h3>{workout.distance} mi</h3>
                <label>Distance</label>
              </div>
              <div>
                <h3>{this.displayTime(workout.duration)}</h3>
                <label>Duration</label>
              </div>
              <div>
                <h3>{workout.elevation} ft</h3>
                <label>Elevation</label>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>);
    return (
      <div className='show-workout-container'>
        {display}
        <RecentActivities workouts={recentWorkouts}/>
      </div>
    )
  }
}
export default ShowWorkout;
