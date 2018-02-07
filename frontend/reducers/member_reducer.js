import { RECEIVE_TEAM } from '../actions/team_actions'

export const membersReducer = (state = {}, action) => {
  Object.freeze(state)
  
  switch (action.type) {

  case RECEIVE_TEAM:
    return action.payload.members
  default:
    return state
  }
}
