import { combineReducers } from 'redux'

import { sessionErrorsReducer } from './session_reducer'
import { teamErrorsReducer } from './team_reducer'


export default combineReducers(
  {session: sessionErrorsReducer,
   team: teamErrorsReducer,
  }
)
