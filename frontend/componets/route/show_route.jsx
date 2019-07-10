import React from 'react';
import { Link } from 'react-router-dom';

class ShowRoute extends React.Component {
  constructor(props) {
    super(props);
    this.route = this.props.route
    console.log(this.props)
  }

  componentWillMount() {
    this.props.fetchRoute(this.props.match.params.routeId)
  }

  render() {
    console.log(this.props);
    const { route, currentUser } = this.props;
    
    const display = this.props.route === undefined ? null : (<div className='show-route'>
      <div className='show-route-header'>
        <header>{route.name}</header>
        <Link to={`routes/edit/${route.id}`} className='edit-btn'>Edit</Link>
      </div>
      <div className='show-route-main'>
        <section className='minimap'><img src={`${route.url}`}/></section>
        <section className='show-route-stats'>
          <div className='name-section'>
            {currentUser.name}
          </div>
          <div className='stats-one'>
            <section>
              {route.distance}mi
            </section>
            <section>
              {route.elevation}ft
            </section>
          </div>
          <div className='stats-two'>
            {route.duration}
          </div>
          <div className='show-route-description'></div>
        </section>
      </div>
    </div>);

    return (
      <div>
        {display}
      </div>
    )
  }
}

export default ShowRoute