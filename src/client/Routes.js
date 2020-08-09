import React from 'react';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UsersListPage';
import { renderRoutes } from 'react-router-config';

export const routesArray = [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UserListPage,
    path: '/users',
  },
];

const Routes = () => {
  return (
    <div>{renderRoutes(routesArray)}</div>
  );
};

export default Routes;
