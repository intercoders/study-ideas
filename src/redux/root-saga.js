import { all } from 'redux-saga/effects';

import ideas from './ideas/sagas';

function* rootSaga() {
  yield all([
    ...ideas,
  ]);
}

export default rootSaga;
