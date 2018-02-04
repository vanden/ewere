import { combineReducers } from 'redux'

import { RECEIVE_SESSION_ERRORS,
         RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_TEAM,
         RECEIVE_ALL_TEAMS,
         REMOVE_TEAM,
//         REMOVE_TEAM_ERRORS, // Needed? ThinkMore
         RECEIVE_TEAM_ERRORS } from '../actions/team_actions'

// May ultimately want to separate out sessionErrorsReducer and
// errorsReducer but for now, stem the proliferation of file.


const sessionErrorsReducer = (state = [], action) => {

  Object.freeze(state)

  switch (action.type) {

  case RECEIVE_SESSION_ERRORS:
    return action.errors

  case RECEIVE_CURRENT_USER:
    return [] // Was return null. Does it matter? FixMe

  default:
    return state
  }
};


const teamErrorsReducer = (state = [], action) => {

  Object.freeze(state)

  switch(action.type) {

  case RECEIVE_TEAM:
  case RECEIVE_ALL_TEAMS:
  case REMOVE_TEAM:
//  case REMOVE_TEAM_ERRORS:  // Needed? ThinkMore
    return []

  case RECEIVE_TEAM_ERRORS:
    return action.errors;

  default:
    return state
  }
}

export default combineReducers(
  {session: sessionErrorsReducer,
   team: teamErrorsReducer,
  }
)
