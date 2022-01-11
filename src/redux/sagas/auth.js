import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import {
  GET_USERS_REQUEST,
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  UPDATE_USER_REQUEST,
} from "../types";
import { clientErrorMessage, delay } from "./reusable";
import {
  getUserFailure,
  getUserLoading,
  getUsersFailure,
  getUsersLoading,
  getUsersSuccess,
  getUserSuccess,
  loginFailure,
  loginLoading,
  loginSuccess,
  registerFailure,
  registerLoading,
  registerSuccess,
  updateUserFailure,
  updateUserLoading,
  updateUserSuccess,
} from "../action";

const ajaxDBCalls = {
  register: async ({ formData, refId }) => {
    console.log({ formData, refId });
    if (refId) {
      const response = await axios.post(
        `/auth/register?refId=${refId}`,
        formData
      );
      return response;
    } else {
      const response = await axios.post(`/auth/register`, formData);
      return response;
    }
  },
  login: async (formData) => {
    const response = await axios.post(`/auth/login`, formData);
    return response;
  },
  getUsers: async () => {
    const response = await axios.get(`/auth/users`);
    return response;
  },
  getUser: async (id) => {
    const response = await axios.get(`/auth/user/${id}`);
    return response;
  },
  updateUser: async ({ formData, id }) => {
    const response = await axios.put(`/auth/user/${id}`, formData);
    return response;
  },
};

function* register({ payload }) {
  try {
    yield put(registerLoading(true));

    const res = yield call(ajaxDBCalls.register, payload);

    yield put(registerSuccess(res.data));

    yield put(registerLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(registerFailure(errorMessage));
    yield put(registerLoading(false));
    yield delay();
    yield put(registerFailure(""));
  }
}
function* login({ payload }) {
  try {
    yield put(loginLoading(true));

    const res = yield call(ajaxDBCalls.login, payload);

    yield put(loginSuccess(res.data));

    yield put(loginLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(loginFailure(errorMessage));
    yield put(loginLoading(false));
    yield delay();
    yield put(loginFailure(""));
  }
}
function* getUsers({ payload }) {
  try {
    yield put(getUsersLoading(true));

    const res = yield call(ajaxDBCalls.getUsers, payload);

    yield put(getUsersSuccess(res.data));

    yield put(getUsersLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getUsersFailure(errorMessage));
    yield put(getUsersLoading(false));
    yield delay();
    yield put(getUsersFailure(""));
  }
}
function* getUser({ payload }) {
  try {
    yield put(getUserLoading(true));

    const res = yield call(ajaxDBCalls.getUser, payload);

    yield put(getUserSuccess(res.data));

    yield put(getUserLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getUserFailure(errorMessage));
    yield put(getUserLoading(false));
    yield delay();
    yield put(getUserFailure(""));
  }
}
function* updateUser({ payload }) {
  try {
    yield put(updateUserLoading(true));

    const res = yield call(ajaxDBCalls.updateUser, payload);

    yield put(updateUserSuccess(res.data));

    yield put(updateUserLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(updateUserFailure(errorMessage));
    yield put(updateUserLoading(false));
    yield delay();
    yield put(updateUserFailure(""));
  }
}

//Watchers
function* registerWatcher() {
  yield takeLatest(REGISTER_REQUEST, register);
}
function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, login);
}
function* getUsersWatcher() {
  yield takeLatest(GET_USERS_REQUEST, getUsers);
}
function* getUserWatcher() {
  yield takeLatest(GET_USER_REQUEST, getUser);
}
function* updateUserWatcher() {
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
}

export default function* authSagas() {
  yield spawn(registerWatcher);
  yield spawn(loginWatcher);
  yield spawn(getUsersWatcher);
  yield spawn(getUserWatcher);
  yield spawn(updateUserWatcher);
}
