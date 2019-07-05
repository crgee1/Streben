/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault;
    this.props.logout();
  }

  render() {
    const { currentUser } = this.props;

    const submenuRight = (
      <ul className="drop-submenu-profile">
        <li className="drop-submenu-item ">
          <a>Profile</a>
        </li>
        <li className="drop-submenu-item ">
          <a>Friends</a>
        </li>
        <li className="drop-submenu-item ">
          <a onClick={this.handleLogout}>Logout</a>
        </li>
      </ul>
    );

    const displayRight = currentUser ? (
      <div className="navbar-right-side">
        <span className="welcome">
          <h3>Welcome { currentUser.username }!</h3>
        </span>
        <span>
          <nav className="drop">
            <ul className="drop-menu">
              <a>Profile</a>
              {submenuRight}
            </ul>
          </nav>
        </span>
      </div>
    ) : (
      <div className="navbar-right-side">
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

    const submenuLeft = (
      <ul className="drop-submenu-dash">
        <li className="drop-submenu-item ">
          <Link className='drop-submenu-item' to='/dashboard'>Activity Feed</Link>
        </li>
        <li className="drop-submenu-item">
          <Link className="drop-submenu-item" to="/routes">My Routes</Link>
        </li>
      </ul>
    );

    const displayLeft = currentUser ? (
      <div className="navbar-left-side">
        <span>
          <nav className="drop">
            <ul className="drop-menu">
              <a>{'Dashboard \u2228'}</a>
              {submenuLeft}
            </ul>
          </nav>
        </span>
      </div>
    ) : null;

    return (
      <div className="navbar-main">
        <Link className="logo" to="/dashboard">STREBEN</Link>
        <section className="navbar-side">
          <section>
            {displayLeft}
          </section>
          <section>
            {displayRight}
          </section>
        </section>
      </div>
    );
  }
}

export default Navbar;
