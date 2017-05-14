import { fork } from 'redux-saga/effects';

import playerSaga from './playerSaga.js';
import rosterSaga from './rosterSaga.js';

export default function* rootSaga() {
  yield fork(playerSaga);
  yield fork(rosterSaga);
}
