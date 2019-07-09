import React from 'react';
import { withRouter } from 'react-router-dom';

class SaveRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      distance: this.props.routeInfo.distance,
      duration: this.props.routeInfo.duration,
      elevation: this.props.routeInfo.elevation,
      url: this.props.routeInfo.url,
      name: '',
      description: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRoute(this.state)
    .then(res => this.props.routeInfo.locationArr.forEach(location =>
        this.props.createLocation({
          route_id: res.route.id,
          order: location.order,
          latitude: location.latitude,
          longitude: location.longitude,
        })))
      .then(() => this.props.history.push(`/routes`));
        this.props.closeModal();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render(){
    return (
      <div className='save-route-modal'>
        <section className='save-header'>
          <h1>Save</h1>
        </section>
        <section className='save-main'>
          <form onSubmit={this.handleSubmit}>
            Enter a name and description for your route below. On the next page, you'll be able to see, edit, and share your route.
            <div className='inline-row'>
              <label htmlFor='types'>Type
              </label>
              <select name="types" id="types" className='selectbox'>
                <option value="Run">Run</option>
                <option value="Cycle">Cycle</option>
                <option value="Walk">Walk</option>
              </select>
              <label>Route Name (required)
                <input type="text" value={this.state.name} onChange={this.update('name')}/>
              </label>
            </div>
            <label htmlFor='description'>Description
            </label>
            <textarea id='description' type="text" value={this.state.description} onChange={this.update('description')}/>
            <input className='modal-save-btn' type="submit"/>
          </form>
        </section>
      </div>
    )
  }
}

export default withRouter(SaveRoute);