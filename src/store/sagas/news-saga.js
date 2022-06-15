import {
  takeLatest,
  put,
  call,
  cancel,
} from 'redux-saga/effects';

import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';
import {
  getNewsSuccessAction,
  getNewsFailAction,
} from '../actions';

function* getNewsWorker() {
  try {
    const data = yield call(adapter, {
      method: 'get',
      url: '/news',
    });
    if (data.data) {
      yield put(getNewsSuccessAction(data.data));
    } else {
      yield cancel('Can\'n get news');
    }
  } catch (e) {
    yield put(getNewsFailAction(e.message));
  }
}

export default function* newsWatcher() {
  yield takeLatest(actionTypes.GET_NEWS, getNewsWorker);
}
