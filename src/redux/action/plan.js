import {
  CREATE_PLAN_FAIL,
  CREATE_PLAN_LOADING,
  CREATE_PLAN_REQUEST,
  CREATE_PLAN_SUCCESS,
  CLEAR_CREATE_PLAN_SUCCESS,
  GET_PLANS_REQUEST,
  GET_PLANS_SUCCESS,
  GET_PLANS_FAIL,
  GET_PLANS_LOADING,
} from "../types";

export const createPlanRequest = (prop) => {
  return {
    type: CREATE_PLAN_REQUEST,
    payload: prop,
  };
};

export const createPlanSuccess = (prop) => {
  return {
    type: CREATE_PLAN_SUCCESS,
    payload: prop,
  };
};
export const clearCreatePlanSuccess = (prop) => {
  return {
    type: CLEAR_CREATE_PLAN_SUCCESS,
    payload: prop,
  };
};

export const createPlanFailure = (errors) => {
  return {
    type: CREATE_PLAN_FAIL,
    payload: { errors },
  };
};

export const createPlanLoading = (loading) => {
  return {
    type: CREATE_PLAN_LOADING,
    payload: loading,
  };
};

export const getPlansRequest = (prop) => {
  return {
    type: GET_PLANS_REQUEST,
    payload: prop,
  };
};

export const getPlansSuccess = (prop) => {
  return {
    type: GET_PLANS_SUCCESS,
    payload: prop,
  };
};

export const getPlansFailure = (errors) => {
  return {
    type: GET_PLANS_FAIL,
    payload: { errors },
  };
};

export const getPlansLoading = (loading) => {
  return {
    type: GET_PLANS_LOADING,
    payload: loading,
  };
};
