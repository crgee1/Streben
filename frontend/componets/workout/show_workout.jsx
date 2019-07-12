import React from 'react';
import { Link } from 'react-router-dom';

class ShowWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.displayTime = this.displayTime.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.workoutId)
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  render() {
    const {workout, user} = this.props;
    const display = this.props.workout === undefined ? null : (<div className='show-workout-main'>
      <Link to={`edit/${workout.id}`}><div className='icons'>
        <i className="far fa-edit"></i>
      </div></Link>
      <div className='show-workout-display'>
        <header><h1>{user.username} - {workout.workout_type}</h1></header>
        <div className='show-workout-info'>
          <section className='show-workout-left'>
            <section className='avatar-image'>
              <h1>
                {user.username[0]}
              </h1>
            </section>
            <section className='show-text'>
              <h2>{workout.name}</h2>
              <p>{workout.description}</p>
            </section>
            <hr/>
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
            <hr />
          </section>
        </div>
      </div>
    </div>);
    return (
      <div>
        {display}
      </div>
    )
  }
}
// { this.props.users[this.props.workout.user_id].username }
export default ShowWorkout;