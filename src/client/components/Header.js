import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => {
  console.log('My auth status is', props.auth);
  return (
    <div>
      <Link to='/'>React SSR</Link>
      <div>
        <Link to='/users'>Users</Link>
        <Link to='/admins'>Admins</Link>
        {
          props.auth ? <a href='/api/logout'>Logout</a>
            : <a href='/api/auth/google'>Login</a>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
