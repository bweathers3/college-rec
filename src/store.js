import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  //applyMiddleware(thunk, promise, logger)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
