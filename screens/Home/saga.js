import { take, call, put, select, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { LOAD_USERS, LOAD_USERS_SUCCESS } from "./constants";

export function* doLoadUsers(data) {
  try {
    const result = yield call(() => {
      return axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          console.log(response.data);
          return response.data;
        })
        .catch(error => {
          console.log(error);
        });
    });

    yield put({ type: LOAD_USERS_SUCCESS, result });
  } catch (err) {
    console.log(err);
  }
}

export default function* loadsUsersSaga() {
  yield takeLatest(LOAD_USERS, doLoadUsers);
}
