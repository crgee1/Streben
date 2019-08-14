import React from 'react';
import { Link } from 'react-router-dom';

export default props => { 
  console.log(props);
  const recent = props.workouts.slice(0, 5).map((el, i) => (
    <span key={i}>
      <Link to={`/training/${el.id}`}>
        {el.name}
      </Link>
    </span>));
  return (
    <footer className='recentActivities-footer'>
      <div>
        <section>
          <h2>Your Recent Activities</h2>
          {recent}
        </section>
      </div>
    </footer>
  )
}
