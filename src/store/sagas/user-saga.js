import {
  takeLatest,
  put,
  call,
  cancel,
} from 'redux-saga/effects';

import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';
import {
  getUserDataSuccessAction
} from '../actions';

function* getUserData(action) {
  console.log( action.payload );
  try {
    const data = yield call(adapter, {
      method: 'get',
      url: `/user/${ action.payload }`,
    });

    if (data.data) {
      yield put(getUserDataSuccessAction(data.data));
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
