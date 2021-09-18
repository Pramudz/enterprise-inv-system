import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "./authActionTypes";
import instanceOfAxios from "../../services/axios";

export const logiAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

export const loginAuthSuccess = (userData) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      user: userData,
    },
  };
};

export const loginAuthFail = (error) => {
  return {
    type: AUTH_FAILED,
    payload: {
      error: error,
    },
  };
};

export const userLoginWithThunk = (loginRequest, history) => {
  return function (dispatch) {
    dispatch(logiAuthRequest());
    instanceOfAxios
      .post("/auth/login", loginRequest)
      .then((response) => {
        if (response.status === 200) {
          const userKey = response.data;
          dispatch(loginAuthSuccess(userKey));
          localStorage.setItem("USER_KEY", userKey.jwt);
          history.push("/home");
        } else {
          dispatch(loginAuthFail("Something Wrong!Please Try Again"));
        }
      })
      .catch((err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 401:
              console.log("401 status");
              dispatch(loginAuthFail("Authentication Failed.Bad Credentials"));
              break;
            default:
              dispatch(loginAuthFail("Something Wrong!Please Try Again"));
          }
        } else {
          dispatch(loginAuthFail("Something Wrong!Please Try Again"));
        }
      });
  };
};

// export const fetchUsers = (apiUrl) => {
//   return (dispatch) => {
//     dispatch(fetchUserRequest());
//     axios
//       .get(apiUrl)
//       .then((response) => {
//         const users = response.data;
//         dispatch(fetchUserSuccess(users));
//       })
//       .catch((error) => {
//         const errorMsg = error.messege;
//         dispatch(fetUserFailure(errorMsg));
//       });
//   };
// };
