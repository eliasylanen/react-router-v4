import { combineReducers } from 'redux';

import login from './login.js';
import isFetching from './isFetching.js';
import players from './players.js';
import selectedPlayer from './selectedPlayer.js';

const rootReducer = combineReducers({
  login,
  isFetching,
  players,
  selectedPlayer,
});

export default rootReducer;
