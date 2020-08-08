import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UserListContainer from './components/UsersList';

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path='/users' component={UserListContainer}/>
    </div>
  );
};

export default Routes;
