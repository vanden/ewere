import { combineReducers } from 'redux';

import { sessionReducer } from './session_reducer';
import errors from './errors_reducer';
import { teamReducer } from './team_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  errors,
  team: teamReducer
});

export default rootReducer;
