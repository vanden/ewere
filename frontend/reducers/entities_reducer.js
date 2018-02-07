import { combineReducers } from 'redux'

import { teamReducer } from './team_reducer'
import projects from './project_reducer'


const entitiesReducer = combineReducers({
  teams: teamReducer,
  projects,  
})

export default entitiesReducer
