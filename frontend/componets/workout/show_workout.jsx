import React from 'react';
import { Link } from 'react-router-dom';

class ShowWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.displayTime = this.displayTime.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts()
  }

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
    result.push(days[date.getDay()]);
    result.push(`${months[date.getMonth()]} ${date.getDate()}`);
    result.push(date.getFullYear());
    return result.join(', ')
  }

  handleDelete() {
    this.props.deleteWorkout(this.props.match.params.workoutId)
      .then(() => this.props.history.push(`/dashboard`))
  }

  handleEdit() {
    this.props.history.push(`/training/edit/${this.props.match.params.workoutId}`)
  }

  render() {
    const {workout, user, recentWorkouts} = this.props;
    const recent = recentWorkouts.slice(0,5).map((el, i) => (
      <span>
        <Link to={`/training/${el.id}`} key={i}>
          {el.name}
        </Link>
      </span>));
    const display = this.props.workout === undefined ? null : (<div className='show-workout-main'>
      <div className='icons'>
        <span onClick={this.handleEdit} className='show-workout-btn-edit'>
          <i className="far fa-edit"></i>
        </span>
        <span onClick={this.handleDelete}>
          <i className="far fa-trash-alt"></i>
        </span>
      </div>
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
        <footer className='show-workout-footer'>
          <div>
            <section>
            <h2>Your Recent Activities</h2>
              {recent}
            </section>
          </div>
        </footer>
      </div>
    )
  }
}
export default ShowWorkout;