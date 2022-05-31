import {
  takeLatest,
  put,
  call,
  cancel,
} from 'redux-saga/effects';

import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';
import {
  signUpFailAction,
  logInFailAction,
  logInSuccessAction,
  whoAmFail,
  whoAmISuccess,
  logInUserAction,
  signUpSuccessAction,
  logOutSuccess,
  logOutFail,
} from '../actions';
import { setTokenFromLS } from '../../utils';

function* signUp(action) {
  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/auth/signup',
      data: action.payload,
    });

    if (data.status === 200) {
      yield put(signUpSuccessAction());
      yield put(logInUserAction(action.payload));
    } else {
      yield cancel('The user is not created');
    }
  } catch (e) {
    yield put(signUpFailAction(e.message));
  }
}

function* signIn(action) {
  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/auth/login',
      data: action.payload,
    });

    if (data.data) {
      setTokenFromLS(data.data.token);
      // localStorage.setItem('token', data.data.token);
      yield put(logInSuccessAction(data.data.user));
    } else {
      yield cancel('Error!');
    }
  } catch (e) {
    yield put(logInFailAction(e.message));
  }
}

function* whoAmI() {
  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/auth/token',
    });
    yield put(whoAmISuccess(data.data));
  } catch (e) {
    yield put(whoAmFail(e.message));
  }
}

function* logOut() {
  try {
    localStorage.removeItem('token');
    yield put(logOutSuccess());
  } catch (e) {
    yield put(logOutFail(e.message));
  }
}

export default function* authWatcher() {
  yield takeLatest(actionTypes.SIGN_UP_USER, signUp);
  yield takeLatest(actionTypes.SIGN_IN_USER, signIn);
  yield takeLatest(actionTypes.WHOAMI, whoAmI);
  yield takeLatest(actionTypes.LOGOUT, logOut);
}
