import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import { GET_USER_INVESTMENTS_REQUEST } from "../types";
import { clientErrorMessage, delay } from "./reusable";

import {
  getUserInvestmentsFailure,
  getUserInvestmentsLoading,
  getUserInvestmentsSuccess,
} from "../action";

const ajaxDBCalls = {
  getUserInvestments: async (id) => {
    const response = await axios.get(`/investment/user/${id}`);
    return response;
  },
};

function* getUserInvestments({ payload }) {
  try {
    yield put(getUserInvestmentsLoading(true));

    const res = yield call(ajaxDBCalls.getUserInvestments, payload);

    yield put(getUserInvestmentsSuccess(res.data));

    yield put(getUserInvestmentsLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getUserInvestmentsFailure(errorMessage));
    yield put(getUserInvestmentsLoading(false));
    yield delay();
    yield put(getUserInvestmentsFailure(""));
  }
}

//Watchers
function* getUserInvestmentsWatcher() {
  yield takeLatest(GET_USER_INVESTMENTS_REQUEST, getUserInvestments);
}

export default function* investmentSagas() {
  yield spawn(getUserInvestmentsWatcher);
}
