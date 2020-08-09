import React from 'react';
import { connect } from 'react-redux';
import { fetchAdminsAction } from '../actions/fetchAdminsAction';
import withRequireAuth from '../components/hoc/RequireAuth';

class AdminsListPage extends React.Component {
  componentDidMount () {
    this.props.fetchAdmins();
  }

  render () {
    return (
      <div>
        <h3>Protected list of admins:</h3>
        <ul>
          {
            this.props.admins.map(admin => {
              return <li key={admin.id}>{admin.name}</li>;
            })
          }
        </ul>
      </div>
    );
  }
};

const WrappedAdminsListPage = withRequireAuth(AdminsListPage);

const loadData = (store) => {
  return store.dispatch(fetchAdminsAction());
};

const mapStateToProps = (state) => {
  return { admins: state.admins };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdmins: () => dispatch(fetchAdminsAction()),
  };
};

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(WrappedAdminsListPage),
  loadData,
};
