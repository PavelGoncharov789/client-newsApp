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

    data = yield call(adapter, {
      method: 'get',
	  url: '/'
    });

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
