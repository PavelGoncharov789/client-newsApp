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
      yield cancel('Не могу получить пользовательские данные');
    }
  } catch (error) {
    yield put(getUserDataFailAction(error.message));
  }
}

function* addUserAvatar(action) {
  const { image } = action.payload;

  const formData = new FormData();
  formData.append('file', image);

  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/addAvatar',
    });
    console.log(data.status, "data.status,");
  } catch {
    yield put(addNewsFailAction(e.message));
  } 
}

export default function* userWatcher() {
  yield takeLatest(actionTypes.GET_USER_DATA, getUserData);
  yield takeLatest(actionTypes.ADD_AVATAR, addUserAvatar);
}
