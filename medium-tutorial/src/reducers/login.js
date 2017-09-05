import { handleAction } from 'redux-actions';

import { LOGIN } from '../actions/types.js';
import initialState from './initialState.js';

const login = handleAction(
  LOGIN,
  (state, action) => {
    return action.payload;
  },
  initialState.jwt
);

export default login;
