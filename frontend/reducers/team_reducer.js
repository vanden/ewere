import { RECEIVE_TEAM,
         RECEIVE_ALL_TEAMS,
         REMOVE_TEAM,
//       REMOVE_TEAM_ERRORS, // Needed? ThinkMore
         RECEIVE_TEAM_ERRORS
       } from '../actions/team_actions'


const defaultState = Object.freeze({})


export const teamReducer = (state = defaultState, action) => {

  Object.freeze(state)

  switch (action.type) {

  case RECEIVE_TEAM:
    return Object.assign({}, state, { [action.team]: action.team })

  case RECEIVE_ALL_TEAMS:
    return Object.assign({}, action.teams)

  case REMOVE_TEAM:
    let newState = Object.assign({}, state)
    delete newState[action.team.id]
    return newState

  default:
    return state
  }
}

export const teamErrorsReducer = (state = [], action) => {

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
