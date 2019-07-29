import React from 'react';
import { Link } from 'react-router-dom';

class IndexWorkoutItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  handleDelete() {
    this.props.deleteWorkout(this.props.workout.id)
  }

  render() {
    const { id, workout_type, name, duration, distance, elevation } = this.props.workout;
    const rowStyle = this.props.id % 2 === 0 ? 
      { 'backgroundColor': 'rgb(245, 245, 250);' } : { 'backgroundColor': '#f5f5fa' };
    return (
      <tr className='index-workout-item' style={rowStyle}>
        <td className='table-type'>{workout_type}</td>
        <td className='table-string'>{name}</td>
        <td className='table-number'><h3>{this.displayTime(duration)}</h3></td>
        <td className='table-number'><h3>{distance} mile</h3></td>
        <td className='table-number'><h3>{elevation} ft</h3></td>
        <td className='table-button'>
          <Link to={`/training/edit/${id}`}>Edit</Link>
          <a onClick={this.handleDelete}>Delete</a>
        </td>
      </tr>
    )
  }
}

export default IndexWorkoutItem;