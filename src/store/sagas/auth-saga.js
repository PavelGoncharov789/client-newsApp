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
} from '../actions';
import { setTokenFromLS } from '../../utils/tokenUtils';

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
    const { data } = yield call(adapter, {
      method: 'post',
      url: '/auth/login',
      data: action.payload,
    });

    if (data) {
      const { token, user } = data;
      setTokenFromLS(token);
      yield put(logInSuccessAction(user));
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

export default function* authWatcher() {
  yield takeLatest(actionTypes.SIGN_UP_USER, signUp);
  yield takeLatest(actionTypes.SIGN_IN_USER, signIn);
  yield takeLatest(actionTypes.WHOAMI, whoAmI);
}
