import { combineReducers } from 'redux';

import newsReducer from './news-reducer';

import authReducer from './authReducer';

import loginReducer from './login-reducer';

export default combineReducers({ newsReducer, authReducer, loginReducer });
