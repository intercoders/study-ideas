import { combineReducers } from 'redux';

import filters from './filters/reducer';
import ideas from './ideas/reducer';
import screen from './screen/reducer';

const rootReducer = combineReducers({
  filters,
  ideas,
  screen,
});

export default rootReducer;
