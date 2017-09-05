import { takeLatest, call, put, all } from 'redux-saga/effects';

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

export default function* rosterSaga() {
  yield takeLatest(isFetching().type, getRoster);
}
