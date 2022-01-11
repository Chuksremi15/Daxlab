import { GET_USER_INVESTMENTS_SUCCESS } from "../types";

const initialState = () => ({
  investment: {},
  investments: [],
});

const investmentReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case GET_USER_INVESTMENTS_SUCCESS:
      return {
        ...state,
        investments: payload.investments,
      };

    default:
      return state;
  }
};

export default investmentReducer;
