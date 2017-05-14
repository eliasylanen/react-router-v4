import { takeLatest, call, put } from 'redux-saga/effects';

import { playerSelected, playerFound } from '../actions/actionCreators.js';
import { getPlayer } from '../playerAPI.js';

function* fetchPlayer({ payload }) {
  console.log(payload);
  const player = yield call(getPlayer, payload);
  console.log(player);
  yield put(playerFound(player));
}

export default function* playerSaga() {
  yield takeLatest(playerSelected().type, fetchPlayer);
}
