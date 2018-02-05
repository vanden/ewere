import { combineReducers } from 'redux';

import { sessionReducer } from './session_reducer';
import errors from './errors_reducer';
import { teamReducer } from './team_reducer'
import projects from './project_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  errors,
  teams: teamReducer,
  projects,
});

export default rootReducer;
