import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "./authActionTypes";

const initialState = {
  user: {},
  loading: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: "",
      };
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
