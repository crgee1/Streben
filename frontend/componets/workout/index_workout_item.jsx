import React from 'react';

class IndexWorkoutItem extends React.Component {

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  render() {
    const { workout_type, name, duration, distance, elevation } = this.props.workout;
    const rowStyle = this.props.id % 2 === 0 ? { 'backgroundColor': 'rgb(245, 245, 250);' } : { 'backgroundColor': 'rgb(230, 230, 235)' };
    return (
      <tr className='index-workout-item' style={rowStyle}>
        <td className='table-string'>{workout_type}</td>
        <td className='table-string'>{name}</td>
        <td className='table-number'>{this.displayTime(duration)}</td>
        <td className='table-number'>{distance} mile</td>
        <td className='table-number'>{elevation} ft</td>
      </tr>
    )
  }
}

export default IndexWorkoutItem;