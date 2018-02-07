import { combineReducers } from 'redux'

import { sessionReducer } from './session_reducer'
import errors from './errors_reducer'
import { teamReducer } from './team_reducer'
import projects from './project_reducer'
import entitiesReducer from './entities_reducer'



const rootReducer = combineReducers({
  session: sessionReducer,
  errors,
  entities: entitiesReducer
})

export default rootReducer
