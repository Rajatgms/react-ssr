import React from 'react';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UsersListPage';
import { renderRoutes } from 'react-router-config';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';

export const routesArray = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UserListPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

const Routes = () => {
  return (
    <div>{renderRoutes(routesArray)}</div>
  );
};

export default Routes;
