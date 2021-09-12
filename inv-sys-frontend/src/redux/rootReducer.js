import { combineReducers } from "redux";
import authReducer from "./authorization/authReducer";

const rootReducer = combineReducers({
  loggedInUser: authReducer,
});

export default rootReducer;
