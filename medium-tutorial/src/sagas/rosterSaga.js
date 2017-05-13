import { takeLatest, call, put } from 'redux-saga';

import {
  isFetching,
  fetchSuccess,
  fetchFail,
  fetchComplete,
} from '../actions/actionCreators.js';
import { getAllPlayers } from '../playerAPI.js';

function* getRoster(action) {
  yield put(action);
  try {
    const players = yield call(getAllPlayers);
    yield put(fetchSuccess(players));
  } catch (error) {
    yield put(fetchFail(new Error(error)));
  }
  yield put(fetchComplete);
}

export default function* rosterSaga() {
  console.log('started');
  yield takeLatest(isFetching(), getRoster);
}
