import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
});

export default rootReducer;
