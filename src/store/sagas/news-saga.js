import {
  takeLatest, put,
  call,
  cancel
} from 'redux-saga/effects';
import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';

import {
  getNewsSuccessAction,
  getNewsFailAction,
} from '../actions';

const getNewsWorker = function* () {
  let data;
  try {

console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL);
    data = yield call(adapter, {
      method: 'get',
	  url: '/'
    });
console.log('data', data)
	if(data.data) {
		yield put(getNewsSuccessAction(data.data));
	} else{
		yield cancel('Can\'n get news');
	}
  } catch (e) {
    yield put(getNewsFailAction(e.message));
  }
};

const newsWatcher = function* () {
  yield takeLatest(actionTypes.GET_NEWS, getNewsWorker);
};

export default newsWatcher;
