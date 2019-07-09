import React from 'react';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { route } = this.props;
    console.log(this.props)
    return (
      <div className='route-index-item'>
        <img src={`${route.url}`}/>
        <section className='route-index-item-'>
          <ul className='route-index-list'>
            <label>Name
              <li>{route.name}</li>
            </label>
            <label>Distance
              <li>{route.distance}</li>
            </label>
            <label>Duration
              <li>{route.duration}</li>
            </label>
            <label>Elevation
              <li>{route.elevation}</li>
            </label>
          </ul>
        </section>
      </div>
    )
  }
}

export default RouteIndexItem