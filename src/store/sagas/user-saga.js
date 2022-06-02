import {
  takeLatest,
  put,
  call,
  cancel,
} from 'redux-saga/effects';

import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';
import { getUserDataSuccessAction, getUserDataFailAction } from '../actions/user-action';

function* getUserData(action) {
  try {
    const { data } = yield call(adapter, {
      method: 'get',
      url: `/users/${action.payload}`,
    });
    if (data) {
      yield put(getUserDataSuccessAction(data));
    } else {
      yield cancel('Can\'n get news');
    }
  } catch (e) {
    yield put(getUserDataFailAction(e.message));
  }
}

export default function* userDataWatcher() {
  yield takeLatest(actionTypes.GET_USER_DATA, getUserData);
}
