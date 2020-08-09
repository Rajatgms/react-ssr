import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export default rootReducer;
