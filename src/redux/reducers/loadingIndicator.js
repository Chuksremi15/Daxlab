import {
  CREATE_PLAN_LOADING,
  GET_PLANS_LOADING,
  GET_USERS_LOADING,
  GET_USER_INVESTMENTS_LOADING,
  GET_USER_LOADING,
  LOGIN_LOADING,
  REGISTER_LOADING,
} from "../types";

const initialState = {
  registerLoading: false,
  loginLoading: false,
  createPlanLoading: false,
  getPlansLoading: true,
  getUsersLoading: true,
  getUserLoading: true,
  getUserInvestments: true,
  updateUserLoading: false,
};

const loadingIndicator = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        registerLoading: payload,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: payload,
      };
    case CREATE_PLAN_LOADING:
      return {
        ...state,
        createPlanLoading: payload,
      };
    case GET_PLANS_LOADING:
      return {
        ...state,
        getPlansLoading: payload,
      };
    case GET_USERS_LOADING:
      return {
        ...state,
        getUsersLoading: payload,
      };
    case GET_USER_LOADING:
      return {
        ...state,
        getUserLoading: payload,
      };
    case GET_USER_INVESTMENTS_LOADING:
      return {
        ...state,
        getUserInvestments: payload,
      };

    default:
      return state;
  }
};

export default loadingIndicator;
