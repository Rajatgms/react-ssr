import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router-dom';

const withRequireAuth = (ChildComponent) => {
  class RequireAuth extends React.Component {
    render () {
      switch (this.props.auth) {
        case false:
          return <Redirect to='/'/>;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props}/>;
      }
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };
  return connect(mapStateToProps)(RequireAuth);
};

export default withRequireAuth;
