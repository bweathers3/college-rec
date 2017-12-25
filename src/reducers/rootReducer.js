import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from './authReducer';
import salesPointsHome from './salesPointsHome';

const rootReducer = combineReducers({ authReducer, salesPointsHome, routing: routerReducer });

export default rootReducer;
