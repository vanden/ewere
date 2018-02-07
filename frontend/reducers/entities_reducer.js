import { combineReducers } from 'redux'

import { teamReducer } from './team_reducer'
import members from './member_reducer'
import projects from './project_reducer'


const entitiesReducer = combineReducers({
  teams: teamReducer,
  members,
  projects,  
})

export default entitiesReducer
