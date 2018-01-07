import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

import accountInfo from './accountInfo';
import authReducer from './authReducer';
import salesPointsHome from './salesPointsHome';
import studentAthlete from './studentAthlete';

const rootReducer = combineReducers({ accountInfo, authReducer, salesPointsHome, studentAthlete, routing: routerReducer,  form: formReducer });

export default rootReducer;
