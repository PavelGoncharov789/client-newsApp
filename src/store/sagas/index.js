import { all, call } from 'redux-saga/effects';

import newsWatcher from './news-saga';

export default function* rootSaga() {
  yield all([call(newsWatcher)]);
}
