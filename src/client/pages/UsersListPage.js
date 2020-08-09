import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersAction } from '../actions/fetchUsersAction';
import { Helmet } from 'react-helmet';

class UserList extends React.Component {
  componentDidMount () {
    this.props.fetchUsers();
  }

  render () {
    return (
      <div>
        <Helmet>
          <title>{`${this.props.users.length} Users App`}</title>
          <meta property="og:title" content="Users App"/>
        </Helmet>
        Here's a big list of users:
        <ul>
          {
            this.props.users && this.props.users.map(user => {
              return <li key={user.id}>{user.name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
};

const loadData = (store) => {
  return store.dispatch(fetchUsersAction());
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsersAction()),
  };
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(UserList),
  loadData,
};
