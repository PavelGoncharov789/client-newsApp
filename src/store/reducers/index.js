import { combineReducers } from 'redux';

import newsReducer from './news-reducer';

import authReducer from './authReducer';

import userReducer from './user-reduser';

export default combineReducers({ newsReducer, authReducer, userReducer });
