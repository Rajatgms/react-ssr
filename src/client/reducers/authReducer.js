import { FETCH_CURRENT_USERS } from '../actions/authUserAction';

const authReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CURRENT_USERS:
      return action.payload.data || false;
    default:
      return state;
  }
};

export default authReducer;
