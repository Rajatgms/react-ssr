import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  console.log('My auth status is', props.auth);
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>React SSR</Link>
        <ul className='right'>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/admins'>Admins</Link></li>
          <li>
            {
              props.auth ? <a href='/api/logout'>Logout</a>
                : <a href='/api/auth/google'>Login</a>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
