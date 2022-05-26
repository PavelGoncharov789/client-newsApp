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

function* signUp(action) {
  console.log('action.saga', action);

  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/auth',
      headers:''
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
  yield takeLatest(actionTypes.SIGN_UP_USER, signUp);
}
