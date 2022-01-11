import {
  CLEAR_CREATE_PLAN_SUCCESS,
  CLEAR_UPDATE_USER_SUCCESS,
  CREATE_PLAN_FAIL,
  CREATE_PLAN_SUCCESS,
  GET_PLANS_FAIL,
  GET_PLANS_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_INVESTMENTS_FAIL,
  GET_USER_INVESTMENTS_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "../types";

const initialState = {
  errors: {},
  success: {},
};

const ajaxStatuses = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_FAIL:
      state.errors.register = payload.errors;
      return { ...state };
    case REGISTER_SUCCESS:
      state.success.register = payload.message;
      return { ...state };
    case LOGIN_FAIL:
      state.errors.login = payload.errors;
      return { ...state };
    case LOGIN_SUCCESS:
      state.success.login = payload.message;
      return { ...state };
    case CREATE_PLAN_FAIL:
      state.errors.createPlan = payload.errors;
      return { ...state };
    case CREATE_PLAN_SUCCESS:
      state.success.createPlan = payload.message;
      return { ...state };
    case CLEAR_CREATE_PLAN_SUCCESS:
      state.success.createPlan = "";
      return { ...state };
    case GET_PLANS_FAIL:
      state.errors.getPlans = payload.errors;
      return { ...state };
    case GET_PLANS_SUCCESS:
      state.success.getPlans = payload.message;
      return { ...state };
    case GET_USERS_FAIL:
      state.errors.getUsers = payload.errors;
      return { ...state };
    case GET_USERS_SUCCESS:
      state.success.getUsers = payload.message;
      return { ...state };
    case GET_USER_FAIL:
      state.errors.getUser = payload.errors;
      return { ...state };
    case GET_USER_SUCCESS:
      state.success.getUser = payload.message;
      return { ...state };
    case UPDATE_USER_FAIL:
      state.errors.updateUser = payload.errors;
      return { ...state };
    case UPDATE_USER_SUCCESS:
      state.success.updateUser = payload.message;
      return { ...state };
    case CLEAR_UPDATE_USER_SUCCESS:
      state.success.updateUser = "";
      return { ...state };
    case GET_USER_INVESTMENTS_FAIL:
      state.errors.getUserInvestments = payload.errors;
      return { ...state };
    case GET_USER_INVESTMENTS_SUCCESS:
      state.success.getUserInvestments = payload.message;
      return { ...state };

    default:
      return state;
  }
};

export default ajaxStatuses;
