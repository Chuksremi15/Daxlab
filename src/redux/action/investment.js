import {
  GET_USER_INVESTMENTS_REQUEST,
  GET_USER_INVESTMENTS_SUCCESS,
  GET_USER_INVESTMENTS_FAIL,
  GET_USER_INVESTMENTS_LOADING,
} from "../types";

export const getUserInvestmentsRequest = (prop) => {
  return {
    type: GET_USER_INVESTMENTS_REQUEST,
    payload: prop,
  };
};

export const getUserInvestmentsSuccess = (prop) => {
  return {
    type: GET_USER_INVESTMENTS_SUCCESS,
    payload: prop,
  };
};

export const getUserInvestmentsFailure = (errors) => {
  return {
    type: GET_USER_INVESTMENTS_FAIL,
    payload: { errors },
  };
};

export const getUserInvestmentsLoading = (loading) => {
  return {
    type: GET_USER_INVESTMENTS_LOADING,
    payload: loading,
  };
};
