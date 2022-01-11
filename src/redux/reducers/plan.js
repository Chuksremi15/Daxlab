import { CREATE_PLAN_SUCCESS, GET_PLANS_SUCCESS } from "../types";

const initialState = () => ({
  plan: {},
  plans: [],
});

const planReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case CREATE_PLAN_SUCCESS:
      return {
        ...state,
        plan: payload.plan,
      };
    case GET_PLANS_SUCCESS:
      return {
        ...state,
        plans: payload.plans,
      };

    default:
      return state;
  }
};

export default planReducer;
