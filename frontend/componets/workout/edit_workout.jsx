import React from 'react';

class EditWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.preworkout.user_id,
      distance: this.props.preworkout.distance,
      duration: this.props.preworkout.duration,
      elevation: this.props.preworkout.elevation,
      name: this.props.preworkout.name,
      workout_type: this.props.preworkout.workout_type,
      description: this.props.preworkout.description,
      create_date: this.props.preworkout.create_date,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateDuration = this.updateDuration.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.workoutId)
      .then(() => this.setState({
        id: this.props.preworkout.id,
        user_id: this.props.preworkout.user_id,
        distance: this.props.preworkout.distance,
        duration: this.props.preworkout.duration,
        elevation: this.props.preworkout.elevation,
        name: this.props.preworkout.name,
        create_date: this.props.preworkout.create_date,
        workout_type: this.props.preworkout.workout_type,
        description: this.props.preworkout.description,
        hours: Math.floor(this.props.preworkout.duration / 3600),
        minutes: Math.floor(this.props.preworkout.duration % 3600 / 60),
        seconds: Math.floor(this.props.preworkout.duration % 60),
      }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === '') {
      document.getElementById('name-err').innerHTML = 'Name cant be blank';
    } else {
      this.props.updateWorkout(this.state).then(res => this.props.history.push(`/training/${res.payload.workouts.id}`));
    }
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value }, () => {
        let result = parseInt(this.state.hours * 3600 || 0) + parseInt(this.state.minutes * 60 || 0) + parseInt(this.state.seconds || 0);
        this.setState({ duration: result })
      })
    };
  }

  updateDuration(hr, min, sec) {
    return hr + min + sec
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
              <input className='distance-workout-form' type="text" value={this.state.distance} onChange={this.update('distance')} />
            </div>
            <div>
              <label>Duration</label>
              <section className='duration'>
                <input type="number" value={this.state.hours} onChange={this.update('hours')} />
                <input type="number" value={this.state.minutes} onChange={this.update('minutes')} />
                <input type="number" value={this.state.seconds} onChange={this.update('seconds')} />
              </section>
            </div>
            <div>
              <label>Elevation</label>
              <input className='elevation-workout-form' type="text" value={this.state.elevation} onChange={this.update('elevation')} />
            </div>
          </section>
          <hr />
          <section className='form-sec'>
            <div>
              <label>Sport</label>
              <select className='sport-workout-form' defaultValue={'Run'} onChange={this.update('workout_type')}>
                <option value='Run'>Run</option>
                <option value='Ride'>Ride</option>
                <option value='Hike'>Hike</option>
                <option value='Walk'>Walk</option>
              </select>
              <label>Date</label>
              <input type="date" className='date-workout-form' value={this.state.create_date} onChange={this.update('create_date')} />
            </div>
            {/* <div>
              <label>Date & Time</label>
              <input className='date-workout-form' type="text" />
            </div> */}
          </section>
          <section className='form-sec'>
            <div>
              <label>Title</label>
              <input className='title-workout-form' type="text" value={this.state.name} onChange={this.update('name')} />
              <label id='name-err'></label>
            </div>
          </section>
          <hr />
          <section className='form-sec'>
            <div>
              <label>Description</label>
              <textarea className='description-workout-form' value={this.state.description} onChange={this.update('description')}></textarea>
            </div>
          </section>
          <hr />
          <section className='form-sec'>
            <div>
              <button>Save</button>
            </div>
          </section>
        </form>
      </div>
    )
  }
}

export default EditWorkout;
