import { call, put, takeEvery } from 'redux-saga/effects';

import api from '$api-client';

import { REQUEST } from './action-types';
import { requestSucceeded, requestFailed } from './actions';

function* requestIdeas() {
  try {
    const data = yield call(api.ideas.getAll);
    yield put(requestSucceeded(data));
  } catch (error) {
    const { message } = error;
    alert(message); // eslint-disable-line
    yield put(requestFailed(error));
  }
}

export default [
  takeEvery(REQUEST, requestIdeas),
];
