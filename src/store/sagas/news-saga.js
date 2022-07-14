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
  addNewsFailAction,
  addNewsSuccessAction,
  getUserDataAction,
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

function* addNewsWorker(action) {
  const { image, values, id } = action.payload;

  const formData = new FormData();
  formData.append('file', image);
  for (const key in values) {
    formData.append(key, values[key]);
  }
  try {
    const data = yield call(adapter, {
      method: 'post',
      url: '/news',
      data: formData,
    });
    if (data.status === 201) {
      yield put(getUserDataAction(id));
      yield put(addNewsSuccessAction());
    } else {
      yield cancel('Ошибка! Попробуйте позже...');
    }
  } catch (e) {
    yield put(addNewsFailAction(e.message));
  }
}

export default function* newsWatcher() {
  yield takeLatest(actionTypes.GET_NEWS, getNewsWorker);
  yield takeLatest(actionTypes.ADD_NEWS, addNewsWorker);
}
