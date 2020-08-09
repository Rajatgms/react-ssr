import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsersAction = () => {
  return async dispatch => {
    const response = await axios.get(' https://react-ssr-api.herokuapp.com/users/xss');
    dispatch({ type: FETCH_USERS, payload: response });
  };
};
