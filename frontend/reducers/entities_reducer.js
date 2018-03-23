import { combineReducers } from 'redux'

import { teamReducer } from './team_reducer'
import { membersReducer } from './member_reducer'
import { projectReducer } from './project_reducer'
import { taskReducer } from './task_reducer'

const entitiesReducer = combineReducers({
  teams: teamReducer,
  members: membersReducer,
  projects: projectReducer,
  tasks: taskReducer
})

export default entitiesReducer
