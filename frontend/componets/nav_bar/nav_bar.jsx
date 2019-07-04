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
    const submenu = <ul className="drop-submenu">
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

  const {currentUser} = this.props;
  const display = currentUser ? (
      <div className="navbar-side">
        <span className='welcome'>
          Welcome {currentUser.username}!
          </span>
        <nav className="drop">
            <ul className="drop-menu">
              <a>PROFILE</a>
              {submenu}
            </ul>
        </nav>
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
}

export default Navbar;