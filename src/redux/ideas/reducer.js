import {
  REQUEST_LIST,
  REQUEST_LIST_SUCCEEDED,
  REQUEST_LIST_FAILED,
  REQUEST_SINGLE,
  REQUEST_SINGLE_SUCCEEDED,
  REQUEST_SINGLE_FAILED,
} from './action-types';

const initialState = {
  loading: false,
  error: false,
  list: [],
  single: null,
};

const ideasReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_LIST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case REQUEST_LIST_SUCCEEDED: {
      const { data } = action;

      return {
        ...state,
        list: data,
        loading: false,
        error: false,
      };
    }
    case REQUEST_LIST_FAILED: {
      // const { error } = action;

      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case REQUEST_SINGLE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case REQUEST_SINGLE_SUCCEEDED: {
      const { data } = action;

      return {
        ...state,
        single: data,
        loading: false,
        error: false,
      };
    }
    case REQUEST_SINGLE_FAILED: {
      // const { error } = action;

      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default ideasReducer;
