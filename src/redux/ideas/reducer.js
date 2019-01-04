import {
  REQUEST,
  REQUEST_SUCCEEDED,
  REQUEST_FAILED,
} from './action-types';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const ideasReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case REQUEST_SUCCEEDED: {
      const { data } = action;

      return {
        ...state,
        data,
        loading: false,
        error: false,
      };
    }
    case REQUEST_FAILED: {
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
