import { all, call } from 'redux-saga/effects';

import newsWatcher from './news-saga';
import authWatcher from './auth-saga';
import userWatcher from './user-saga';

export default function* rootSaga() {
  yield all([call(newsWatcher), call(authWatcher), call(userWatcher)]);
}
