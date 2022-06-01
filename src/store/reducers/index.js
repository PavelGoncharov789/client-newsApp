import { combineReducers } from 'redux';

import newsReducer from './news-reducer';

import authReducer from './authReducer';

export default combineReducers({ newsReducer, authReducer });
