export const FETCH_ADMINS = 'FETCH_ADMINS';

export const fetchAdminsAction = () => {
  // axios instance configure withExtraArgument of Thunk
  return async (dispatch, getState, axiosInstance) => {
    const response = await axiosInstance.get('/admins');
    dispatch({ type: FETCH_ADMINS, payload: response });
  };
};
