import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault;
    this.props.logout();
  }


  render() {
    const submenu = <ul className="nav__submenu">
      <li className="nav__submenu-item ">
        <a>Profile</a>
      </li>
      <li className="nav__submenu-item ">
        <a>Friends</a>
      </li>
      <li className="nav__submenu-item ">
        <a onClick={this.handleLogout}>Logout</a>
      </li>
    </ul>

  const {currentUser} = this.props;
  const display = currentUser ? (
      <div className="navbar-side">
        <span className='welcome'>
          Welcome {currentUser.username}!
          </span>
        <nav className="nav">
          <ul className="nav__menu">
            <li
              className="nav__menu-item"
            >
              <a>Profile</a>
              {submenu}
            </li>
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