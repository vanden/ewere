import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import teams from './team_reducer'

const rootReducer = combineReducers({
  session,
  errors,
  teams
});

export default rootReducer;
