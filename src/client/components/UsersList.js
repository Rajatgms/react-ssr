import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersAction } from '../actions/fetchUsersAction';

class UserList extends React.Component {
  componentDidMount () {
    this.props.fetchUsers();
  }

  render () {
    return (
      <div>
        Here's a big list of users:
        <ul>
          {
            this.props.users.map(user => {
              return <li key={user.id}>{user.name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
};

export const loadData = (store) => {
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

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;
