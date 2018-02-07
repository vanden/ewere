import { combineReducers } from 'redux'

import { sessionReducer } from './session_reducer'
import errors from './errors_reducer'
import { teamReducer } from './team_reducer'
import projects from './project_reducer'

const entitiesReducer = combineReducers({
  teams: teamReducer,
  projects,  
})


const rootReducer = combineReducers({
  session: sessionReducer,
  errors,
  entities: entitiesReducer
})

export default rootReducer
