import { handleActions } from 'redux-actions';

import { IS_FETCHING, FETCH_COMPLETE } from '../actions/types.js';
import initialState from './initialState.js';

const isFetching = handleActions(
  {
    [IS_FETCHING](state, action) {
      return action.payload;
    },
    [FETCH_COMPLETE](state, action) {
      return action.payload;
    },
  },
  initialState.isFetching
);

export default isFetching;
