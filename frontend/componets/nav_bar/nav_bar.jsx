import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className="navbar-side">
      <span className='welcome'>
        Welcome {currentUser.username}!
        </span>
      <span>
        <button className="btn" onClick={logout}>Logout</button>
      </span>
    </div>
  ) : (
    <div className="navbar-side">
      <span>
        <Link className="btn" to="/signup">Sign Up</Link>
      </span>
      <span>
        <Link className="btn" to="/login">Log In</Link>
      </span>
      <span>
        <Link className="btn" to="/demo">Demo Log In</Link>
      </span>
    </div>
  );
  return (
    <header className="navbar-main">
      <Link className="logo" to="/dashboard">STREBEN</Link>
      <div>
        {display}
      </div>
    </header>
  )
}
