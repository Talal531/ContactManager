import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from "../actions/types";

export default (state = { email: "", password: "" }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state
      };
    default:
      return state;
  }
};
