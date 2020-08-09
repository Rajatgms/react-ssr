import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUserAction } from './actions/authUserAction';

const App = (props) => {
  const { routes } = props.route;
  return (
    <div>
      <Header/>
      {renderRoutes(routes)}
    </div>
  );
};

const loadData = (store) => {
  return store.dispatch(fetchCurrentUserAction());
};

export default {
  component: App,
  loadData,
};
