import { SET_FILTER } from './action-types';

const initialState = {
  filter: '',
};

const filtersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FILTER: {
      const { value } = action;
      return {
        ...state,
        filter: value,
      };
    }
    default:
      return state;
  }
};

export default filtersReducer;
