import { handleActions } from 'redux-actions';

import { PLAYER_SELECTED, CLEAR_SELECTION } from '../actions/types.js';
import initialState from './initialState.js';

const selectedPlayer = handleActions(
  {
    [PLAYER_SELECTED](state, action) {
      return action.payload;
    },
    [CLEAR_SELECTION](state, action) {
      return {};
    },
  },
  initialState.selectedPlayer
);

export default selectedPlayer;
