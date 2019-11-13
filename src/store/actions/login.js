export const signInStart = () => {
  return {
    type: "LOGIN_START"
  };
};
export const signInSuccess = data => {
  return {
    type: "LOGIN_START",
    signInData: data
  };
};
export const signInFail = error => {
  return {
    type: "LOGIN_FAIL",
    error: error
  };
};
export const signIn = (email, password) => {
  return dispatch => {
    dispatch(signInStart());
  };
};
