import {
  takeLatest,
  put,
  call,
  cancel,
} from 'redux-saga/effects';

import adapter from '../../api/adapter';
import * as actionTypes from '../actionTypes';
import { getUserDataSuccessAction, getUserDataFailAction, addAvatarFailAction } from '../actions/user-action';

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

// function* addUserAvatar(action) {
//   const formData = new FormData();
//   formData.append('file', action.payload);

//   try {
//     const data = yield call(adapter, {
//       method: 'post',
//       url: 'users/avatar',
//       data: formData,
//     });
//   } catch (e) {
//     yield put(addAvatarFailAction(e.message));
//   }
// }

export default function* userWatcher() {
  yield takeLatest(actionTypes.GET_USER_DATA, getUserData);
  // yield takeLatest(actionTypes.ADD_AVATAR, addUserAvatar);
}
