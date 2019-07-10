import React from 'react';

class NewWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      distance: 0,
      duration: 0,
      elevation: 0,
      name: '',
      workout_type: 'Run'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateDuration = this.updateDuration.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === '') {
     document.getElementById('name-err').innerHTML = 'Name cant be blank';
    } else {
    this.props.createWorkout(this.state).then(res => this.props.history.push(`/training/${res.workout.id}`));
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateDuration(increment) {
    return (e) => {this.setState({
      duration: this.state.duration += e.target.value * increment
    })}
  }

  renderErrors() {
    return (
      <section className="workout-errors">
        {this.props.errors.map((error, i) => (
          <ul>
            <li key={`error-${i}`}>
              {error}
            </li>
          </ul>
        ))}
      </section>
    );
  }

  render() {
    return (
      <div className='new-workout'>
        <form className='new-workout-form' onSubmit={this.handleSubmit}>
          <header>
            <h1>Manual Entry</h1>
          </header>
          <section className='form-sec'>
            <div>
              <label>Distance</label>
              <input className='distance-workout-form' type="text" value={this.state.distance} onChange={this.update('distance')}/>
            </div>
            <div>
              <label>Duration</label>
              <section className='duration'>
                <input type="text" value={this.hours} onChange={this.updateDuration(3600)}/>
                <input type="text" value={this.mins} onChange={this.updateDuration(60)}/>
                <input type="text" value={this.secs} onChange={this.updateDuration(1)}/>
              </section>
            </div>
            <div>
              <label>Elevation</label>
              <input className='elevation-workout-form' type="text" value={this.state.elevation} onChange={this.update('elevation')}/>
            </div>
          </section>
          <hr/>
          <section className='form-sec'>
            <div>
              <label>Sport</label>
              <select className='sport-workout-form' defaultValue={'Run'} onChange={this.update('workout_type')}>
                <option value='Run'>Run</option>
                <option value='Ride'>Ride</option>
                <option value='Hike'>Hike</option>
                <option value='Walk'>Walk</option>
              </select>
            </div>
            {/* <div>
              <label>Date & Time</label>
              <input className='date-workout-form' type="text" />
            </div> */}
          </section>
          <section className='form-sec'>
            <div>
              <label>Title</label>
              <input className='title-workout-form' type="text" value={this.state.name} onChange={this.update('name')}/>
              <label id='name-err'></label>
            </div>
          </section>
          <hr/>
          <section className='form-sec'>
            <div>
              <label>Description</label>
              <textarea className='description-workout-form' value={this.state.description} onChange={this.update('description')}></textarea>
            </div>
          </section>
          <hr/>
          <section className='form-sec'>
            <div>
              <button>Create</button>
            </div>
          </section>
        </form>
      </div>
    )
  }
}

export default NewWorkout;
