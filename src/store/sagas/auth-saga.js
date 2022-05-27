import {
  takeLatest,
  put,
  call,
  cancel,
} from 'redux-saga/effects';

import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';
import { signUpSuccessAction, signUpFailAction } from '../actions';

function* signUp(action) {
  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/auth/signup',
      data: action.payload,
    });

    if (data.data) {
      yield put(signUpSuccessAction(data.data));
    } else {
      yield cancel('The user is not created');
    }
  } catch (e) {
    yield put(signUpFailAction(e.message));
  }
}

export default function* authWatcher() {
  yield takeLatest(actionTypes.SIGN_UP_USER, signUp);
}
