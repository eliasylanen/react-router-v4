import { handleActions } from 'redux-actions';

import { FETCH_SUCCESS, FETCH_FAIL } from '../actions/types.js';
import initialState from './initialState.js';

const players = handleActions(
  {
    [FETCH_SUCCESS](state, action) {
      return action.payload;
    },
    [FETCH_FAIL](state, action) {
      return {};
    },
  },
  initialState.players
);

export default players;
