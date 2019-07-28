import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <section className='logo-column'>
          <h2 className='footer-logo'>STREBEN</h2>
        </section>
        <section className='follow-column'>
          <h2>FOLLOW</h2>
          <div>
            <a
              href="https://github.com/crgee1"
              target="_blank"
              className="personal-adver"
            >
            GITHUB
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/christopher-gee-426527118"
              className="personal-adver"
              target="_blank"
            >
            LINKEDIN
            </a>
          </div>
        </section>
        <section className='start-column'>
          <h2>GET STARTED</h2>
          <div><Link to="/signup">SIGN UP</Link></div>
          <div><Link to="/login">LOG IN</Link></div>
        </section>
      </div>
    </footer>

  )
}
