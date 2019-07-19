import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from "./types";

export const loginAction = ({ email, password }) => {
  console.warn(email, password);
};
