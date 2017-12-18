import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import salesPointsHome from './salesPointsHome';

const rootReducer = combineReducers({ salesPointsHome, routing: routerReducer });

export default rootReducer;
