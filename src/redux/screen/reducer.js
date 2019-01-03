import { GOTO_SCREEN } from './action-types';

const initialState = {
  slug: 'list',
};

const screenReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GOTO_SCREEN:
      return {
        ...state,
        slug: action.slug,
      };
    default:
      return state;
  }
};

export default screenReducer;
