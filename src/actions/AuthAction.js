import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL
} from "./types";
import NavigationService from "../../NavigationService";

import firebase from "firebase";

export const loginAction = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        NavigationService.navigate("Home");
      })
      .catch(err => {
        dispatch({ type: LOGIN_USER_FAIL, payload: err });
      });
  };
};
