import {
  takeLatest,
  put,
  call,
  cancel,
} from 'redux-saga/effects';

import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';
import {
  getUserDataSuccessAction,
  getUserDataFailAction,
  addAvatarFailAction,
  addAvatarSuccessAction,
  getUserDataAction,
} from '../actions/user-action';

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
  const { images, id } = action.payload;

  const formData = new FormData();
  formData.append('file', images);

  try {
    const data = yield call(adapter, {
      method: 'post',
      url: 'users/changeavatar',
      data: formData,
    });
    if (data.status === 200) {
      yield put(getUserDataAction(id));
      yield put(addAvatarSuccessAction());
    } else {
      yield cancel('Ошибка! Попробуйте установить аватар позже...');
    }
  } catch (error) {
    yield put(addAvatarFailAction(error.message));
  }
}

export default function* userWatcher() {
  yield takeLatest(actionTypes.GET_USER_DATA, getUserData);
  yield takeLatest(actionTypes.ADD_AVATAR, addUserAvatar);
}
