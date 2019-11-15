import axios from "axios";

export const loginStart = () => {
  return {
    type: "LOGIN_START"
  };
};
export const loginSuccess = (userId, idToken) => {
  console.log(userId);
  return {
    type: "LOGIN_SUCCESS",
    userId: userId,
    idToken: idToken
  };
};
export const loginFail = error => {
  return {
    type: "LOGIN_FAIL",
    error: error
  };
};
export const logout = () => {
  return {
    type: "LOGIN_LOGOUT"
  };
}; 
export const checkLoginTime = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
export const login = (email, password, loginMethod) => {
  return dispatch => {
    dispatch(loginStart());
    const data = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFr8_cD1hwNolhCWFe1befrevgrD1VU6g";
    if (loginMethod === "signUp") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFr8_cD1hwNolhCWFe1befrevgrD1VU6g";
    }
    axios
      .post(url, data)
      .then(response => {
        console.log(response.data);
        dispatch(loginSuccess(response.data.localId, response.data.idToken));
        dispatch(checkLoginTime(response.data.expiresIn));
      })
      .catch(err => {
        dispatch(loginFail(err.response.data.error));
        console.log(err.response.data.error);
      });
  };
};

// export const signUp = data => {
//   return dispatch => {
//     dispatch(loginStart());
//     const loginData = {
//       // firstName: data.firstName,
//       // lastName: data.lastName,
//       email: data.email,
//       password: data.password,
//       returnSecureToken: true
//     };

//     axios
//       .post(
//         "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFr8_cD1hwNolhCWFe1befrevgrD1VU6g",
//         loginData
//       )
//       .then(response => {
//         console.log(response);
//         dispatch(loginSuccess(response.data.localId, response.data.idToken));
//       })
//       .catch(err => {
//         console.log(err);
//         dispatch(loginFail(err));
//       });
//   };
// };
