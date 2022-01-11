import {
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_LOADING,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_LOADING,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_LOADING,
  CLEAR_UPDATE_USER_SUCCESS,
} from "../types";

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const registerRequest = (prop) => {
  return {
    type: REGISTER_REQUEST,
    payload: prop,
  };
};

export const registerSuccess = (prop) => {
  return {
    type: REGISTER_SUCCESS,
    payload: prop,
  };
};

export const registerFailure = (errors) => {
  return {
    type: REGISTER_FAIL,
    payload: { errors },
  };
};

export const registerLoading = (loading) => {
  return {
    type: REGISTER_LOADING,
    payload: loading,
  };
};

export const loginRequest = (prop) => {
  return {
    type: LOGIN_REQUEST,
    payload: prop,
  };
};

export const loginSuccess = (prop) => {
  return {
    type: LOGIN_SUCCESS,
    payload: prop,
  };
};

export const loginFailure = (errors) => {
  return {
    type: LOGIN_FAIL,
    payload: { errors },
  };
};

export const loginLoading = (loading) => {
  return {
    type: LOGIN_LOADING,
    payload: loading,
  };
};

export const getUsersRequest = (prop) => {
  return {
    type: GET_USERS_REQUEST,
    payload: prop,
  };
};

export const getUsersSuccess = (prop) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: prop,
  };
};

export const getUsersFailure = (errors) => {
  return {
    type: GET_USERS_FAIL,
    payload: { errors },
  };
};

export const getUsersLoading = (loading) => {
  return {
    type: GET_USERS_LOADING,
    payload: loading,
  };
};

export const getUserRequest = (prop) => {
  return {
    type: GET_USER_REQUEST,
    payload: prop,
  };
};

export const getUserSuccess = (prop) => {
  return {
    type: GET_USER_SUCCESS,
    payload: prop,
  };
};

export const getUserFailure = (errors) => {
  return {
    type: GET_USER_FAIL,
    payload: { errors },
  };
};

export const getUserLoading = (loading) => {
  return {
    type: GET_USER_LOADING,
    payload: loading,
  };
};

export const updateUserRequest = (prop) => {
  return {
    type: UPDATE_USER_REQUEST,
    payload: prop,
  };
};

export const updateUserSuccess = (prop) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: prop,
  };
};

export const clearUpdateUserSuccess = (prop) => {
  return {
    type: CLEAR_UPDATE_USER_SUCCESS,
    payload: prop,
  };
};

export const updateUserFailure = (errors) => {
  return {
    type: UPDATE_USER_FAIL,
    payload: { errors },
  };
};

export const updateUserLoading = (loading) => {
  return {
    type: UPDATE_USER_LOADING,
    payload: loading,
  };
};
