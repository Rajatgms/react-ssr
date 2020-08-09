export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsersAction = () => {
  // axios instance configure withExtraArgument of Thunk
  return async (dispatch, getState, axiosInstance) => {
    const response = await axiosInstance.get('/users/xss');
    dispatch({ type: FETCH_USERS, payload: response });
  };
};
