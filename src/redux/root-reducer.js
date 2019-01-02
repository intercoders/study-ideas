import { combineReducers } from 'redux';

import filters from './filters/reducer';
import ideas from './ideas/reducer';

const rootReducer = combineReducers({
  filters,
  ideas,
});

export default rootReducer;
