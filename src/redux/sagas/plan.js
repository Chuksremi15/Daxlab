import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import { CREATE_PLAN_REQUEST, GET_PLANS_REQUEST } from "../types";
import { clientErrorMessage, delay } from "./reusable";
import {
  createPlanFailure,
  createPlanLoading,
  createPlanSuccess,
  getPlansFailure,
  getPlansLoading,
  getPlansSuccess,
} from "../action";

const ajaxDBCalls = {
  createPlan: async (formData) => {
    const response = await axios.post(`/plan/create`, formData);
    return response;
  },
  getPlans: async (formData) => {
    const response = await axios.get(`/plan`, formData);
    return response;
  },
};

function* createPlan({ payload }) {
  try {
    yield put(createPlanLoading(true));

    const res = yield call(ajaxDBCalls.createPlan, payload);

    yield put(createPlanSuccess(res.data));

    yield put(createPlanLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(createPlanFailure(errorMessage));
    yield put(createPlanLoading(false));
    yield delay();
    yield put(createPlanFailure(""));
  }
}
function* getPlans({ payload }) {
  try {
    yield put(getPlansLoading(true));

    const res = yield call(ajaxDBCalls.getPlans, payload);

    yield put(getPlansSuccess(res.data));

    yield put(getPlansLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getPlansFailure(errorMessage));
    yield put(getPlansLoading(false));
    yield delay();
    yield put(getPlansFailure(""));
  }
}

//Watchers
function* createPlanWatcher() {
  yield takeLatest(CREATE_PLAN_REQUEST, createPlan);
}
function* getPlansWatcher() {
  yield takeLatest(GET_PLANS_REQUEST, getPlans);
}

export default function* planSagas() {
  yield spawn(createPlanWatcher);
  yield spawn(getPlansWatcher);
}
