import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className="navbar-side">
      <span>
        <h3>Welcome {currentUser.username}!</h3>
        </span>
      <span>
        <button onClick={logout}>Logout</button>
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
    </div>
  );
  return (
    <header className="navbar-main">
      <h1>STREBEN</h1>
      <div>
        {display}
      </div>
    </header>
  )
}
