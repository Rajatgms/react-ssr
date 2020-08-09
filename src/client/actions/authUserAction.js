export const FETCH_CURRENT_USERS = 'FETCH_CURRENT_USERS';

export const fetchCurrentUserAction = () => {
  // axios instance configure withExtraArgument of Thunk
  return async (dispatch, getState, axiosInstance) => {
    const response = await axiosInstance.get('/current_user');
    dispatch({ type: FETCH_CURRENT_USERS, payload: response });
  };
};
