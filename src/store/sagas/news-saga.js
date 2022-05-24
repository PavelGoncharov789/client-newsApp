import {
  takeLatest, put,
  call,
} from 'redux-saga/effects';
import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';

import {
  getNewsSuccessAction,
  getNewsFailAction,
} from '../actions';

const getNewsWorker = function* () {
  let news;
  try {
    news = yield call(adapter, {
      method: 'get',
    });
    yield put(getNewsSuccessAction(news));
  } catch (e) {
    yield put(getNewsFailAction(e.message));
  }
};

const newsWatcher = function* () {
  yield takeLatest(actionTypes.GET_NEWS, getNewsWorker);
};

export default newsWatcher;
