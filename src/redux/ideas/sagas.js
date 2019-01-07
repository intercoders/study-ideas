import { call, put, takeEvery } from 'redux-saga/effects';

import api from '$api-client';

import { REQUEST_LIST, REQUEST_SINGLE } from './action-types';
import {
  requestListSucceeded,
  requestListFailed,
  requestSingleSucceeded,
  requestSingleFailed,
} from './actions';

function* requestListSaga() {
  try {
    const data = yield call(api.ideas.getAll);
    yield put(requestListSucceeded(data));
  } catch (error) {
    const { message } = error;
    alert(message); // eslint-disable-line
    yield put(requestListFailed(error));
  }
}

function* requestSingleSaga(action) {
  const { id } = action;
  try {
    const data = yield call(api.ideas.get, id);
    yield put(requestSingleSucceeded(data));
  } catch (error) {
    const { message } = error;
    alert(message); // eslint-disable-line
    yield put(requestSingleFailed(error));
  }
}

export default [
  takeEvery(REQUEST_LIST, requestListSaga),
  takeEvery(REQUEST_SINGLE, requestSingleSaga),
];
