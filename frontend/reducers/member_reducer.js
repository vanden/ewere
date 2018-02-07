import { RECEIVE_TEAM } from '../actions/team_actions'
import { RECEIVE_PROJECT } from '../actions/project_actions'

export const membersReducer = (state = {}, action) => {
  Object.freeze(state)
  
  switch (action.type) {

  case RECEIVE_TEAM:
  case RECEIVE_PROJECT:
    return action.payload.members
  default:
    return state
  }
}
