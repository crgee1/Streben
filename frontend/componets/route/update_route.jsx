import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.prevRoute.id,
      user_id: this.props.currentUser.id,
      distance: this.props.routeInfo.distance,
      duration: this.props.routeInfo.duration,
      elevation: this.props.routeInfo.elevation,
      url: this.props.routeInfo.url,
      name: this.props.prevRoute.name,
      description: this.props.prevRoute.description,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.prevLocations.forEach(location => this.props.deleteLocation(location.id));
    this.props.updateRoute(this.state)
      .then(res => {this.props.routeInfo.locationArr.forEach(location =>
        this.props.createLocation({
          route_id: res.payload.routes.id,
          order: location.order,
          latitude: location.latitude,
          longitude: location.longitude,
        }));
        return res;
      }).then(res => this.props.history.push(`/routes/${res.payload.routes.id}`));
    this.props.closeModal();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return (
      <div className="save-errors">
        {this.props.errors.map((error, i) => (
          <ul>
            <li key={`error-${i}`}>
              {error}
            </li>
          </ul>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className='save-route-modal'>
        <section className='save-header'>
          <h1>Save</h1>
        </section>
        <section className='save-main'>
          <form onSubmit={this.handleSubmit}>
            <p>
              Enter a name and description for your route below. On the next page, you'll be able to see, edit, and share your route.
            </p>
            <div className='inline-row'>
              <section className='save-route-textcontainer'>
                <label>Type</label>
                <select name="types" className='selectbox'>
                  <option value="Run">Run</option>
                  <option value="Cycle">Cycle</option>
                  <option value="Walk">Walk</option>
                </select>
              </section>
              <section className='save-route-textcontainer'>
                <label>Route Name (required)</label>
                <input className='save-route-name' type="text" value={this.state.name} onChange={this.update('name')} />
                {this.renderErrors()}
              </section>
            </div>
            <section className='save-route-textcontainer-desc'>
              <label>Description
              </label>
              <textarea type="text" value={this.state.description} onChange={this.update('description')} />
            </section>
            <input className='modal-save-btn' type="submit" value='Save' />
          </form>
        </section>
      </div>
    )
  }
}

export default withRouter(UpdateRoute);
