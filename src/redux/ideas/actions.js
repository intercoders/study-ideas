import {
  REQUEST,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED,
} from './action-types';

export const request = () => ({ type: REQUEST });
export const requestSucceeded = data => ({ type: REQUEST_SUCCEEDED, data });
export const requestFailed = error => ({ type: REQUEST_FAILED, error });
