import {
  GET_USER_SUCCESS,
  GET_USERS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from "../types";

const initialState = () => ({
  user: {},
  singleUser: {},
  token: "",
  isLoggedIn: false,
  users: [],
});

const authReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        token: "",
      };
    // case LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     token: payload.token,
    //     user: payload.user,
    //     isLoggedIn: true,
    //   };

    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload.users,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        singleUser: payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
