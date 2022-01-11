import { spawn } from "redux-saga/effects";
import authSagas from "./auth";
import planSagas from "./plan";
import investmentSagas from "./investment";

export default function* rootSaga() {
  yield spawn(authSagas);
  yield spawn(investmentSagas);
  yield spawn(planSagas);
}
