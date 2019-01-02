import { SET_FILTER } from './action-types';

const initialState = {
  ideas: [
    { title: 'Redux' },
    { title: 'React Native' },
  ],
  filter: '',
};

const reducer = (state = initialState, action = {}) => {
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

export default reducer;
