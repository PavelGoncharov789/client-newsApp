import {
  takeLatest,
  put,
  call,
  cancel,
} from 'redux-saga/effects';

import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';
import { signUpFailAction } from '../actions';

function* signUp(action) {
  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/auth/signup',
      data: action.payload,
    });

    if (data.data) {
      localStorage.setItem('token', data.data.token);
    } else {
      yield cancel('The user is not created');
    }
  } catch (e) {
    yield put(signUpFailAction(e.message));
  }
}

function* signIn(action) {
  console.log("aaaaaaa");
  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/auth/login',
      data: action.payload,
    });

    if (data.data) {
      localStorage.setItem('token', data.data.token);
      
    } else {
      yield cancel('Error!');
    }
  } catch (e) {
    yield put(signUpFailAction(e.message));
  }
}

export default function* authWatcher() {
  yield takeLatest(actionTypes.SIGN_UP_USER, signUp, signIn);
}
