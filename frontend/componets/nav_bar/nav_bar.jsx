import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
          <a>My Profile</a>
        </li>
        <li className="drop-submenu-item ">
          <a>My Friends</a>
        </li>
        <li className="drop-submenu-item ">
          <a onClick={this.handleLogout}>Logout</a>
        </li>
      </ul>
    );

    const displayRight = currentUser ? (
      <div className="navbar-right-side">
        <span>
          <nav className="drop">
            <ul className="drop-menu">
              <a>Account</a>
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
        <li className="drop-submenu-item">
          <Link className="drop-submenu-item" to="/training">My Activities</Link>
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

    const routeBuilder = ['/routes/new', '/routes/edit/'];
    const urlRoute = routeBuilder.some(url => this.props.location.pathname.includes(url)) ? null : (<div className="navbar-main">
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
    
    return (
      <div>
        {urlRoute}
      </div>
    );
  }
}

export default withRouter(Navbar);
