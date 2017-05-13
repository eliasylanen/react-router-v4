import { fork } from 'redux-saga/effects';

import playersSaga from './playersSaga.js';
import rosterSaga from './rosterSaga.js';

export default function*() {
  fork(playersSaga);
  fork(rosterSaga);
}
