import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const enchancer = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enchancer);

sagaMiddleware.run(rootSaga);

export default store;
