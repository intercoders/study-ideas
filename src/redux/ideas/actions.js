import {
  REQUEST_LIST,
  REQUEST_LIST_SUCCEEDED,
  REQUEST_LIST_FAILED,
  REQUEST_SINGLE,
  REQUEST_SINGLE_SUCCEEDED,
  REQUEST_SINGLE_FAILED,
} from './action-types';

export const requestList = () => ({ type: REQUEST_LIST });
export const requestListSucceeded = data => ({ type: REQUEST_LIST_SUCCEEDED, data });
export const requestListFailed = error => ({ type: REQUEST_LIST_FAILED, error });

export const requestSingle = id => ({ type: REQUEST_SINGLE, id });
export const requestSingleSucceeded = data => ({ type: REQUEST_SINGLE_SUCCEEDED, data });
export const requestSingleFailed = error => ({ type: REQUEST_SINGLE_FAILED, error });
