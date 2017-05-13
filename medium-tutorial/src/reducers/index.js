import { combineReducers } from 'redux';

import isFetching from './isFetching.js';
import players from './players.js';
import selectedPlayer from './selectedPlayer.js';

const rootReducer = combineReducers({
  isFetching,
  players,
  selectedPlayer,
});

export default rootReducer;
