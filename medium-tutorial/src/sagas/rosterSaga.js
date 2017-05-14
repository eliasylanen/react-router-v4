import { takeLatest, call, put, fork, all } from 'redux-saga/effects';

import {
  isFetching,
  fetchSuccess,
  fetchFail,
  fetchComplete,
} from '../actions/actionCreators.js';
import { getAllPlayers } from '../playerAPI.js';

function* getRoster() {
  try {
    const players = yield call(getAllPlayers);
    yield all([put(fetchSuccess(players)), put(fetchComplete())]);
  } catch (error) {
    yield all([put(fetchFail(new Error(error))), put(fetchComplete())]);
  }
}

function* startFetch(action) {
  yield call(getRoster);
  yield put(action);
}

export default function* rosterSaga() {
  yield takeLatest(isFetching().type, getRoster);
}
