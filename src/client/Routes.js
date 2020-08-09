import React from 'react';
import Home from './components/Home';
import UserListContainer, { loadData } from './components/UsersList';
import { renderRoutes } from 'react-router-config';

export const routesArray = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/users',
    component: UserListContainer,
    loadData
  },
];

const Routes = () => {
  return (
    <div>{renderRoutes(routesArray)}</div>
  );
};

export default Routes;
