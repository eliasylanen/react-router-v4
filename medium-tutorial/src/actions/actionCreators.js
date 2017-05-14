import { createActions } from 'redux-actions';

import {
  IS_FETCHING,
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_COMPLETE,
  PLAYER_SELECTED,
  PLAYER_FOUND,
  CLEAR_SELECTION,
} from './types.js';

export const {
  fetchSuccess,
  playerSelected,
  playerFound,
  isFetching,
  fetchComplete,
  clearSelection,
  fetchFail,
} = createActions(
  {
    [FETCH_SUCCESS](players) {
      return players;
    },
    [PLAYER_SELECTED](playerNumber) {
      return playerNumber;
    },
    [PLAYER_FOUND](player) {
      return player;
    },
    [IS_FETCHING]() {
      return true;
    },
    [FETCH_COMPLETE]() {
      return false;
    },
    [CLEAR_SELECTION]() {
      return {};
    },
  },
  FETCH_FAIL
);
