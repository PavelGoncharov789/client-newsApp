import { all, call } from 'redux-saga/effects';

import newsWatcher from './news-saga';

const rootSaga = function* () {
  yield all([call(newsWatcher)]);
};

export default rootSaga;
