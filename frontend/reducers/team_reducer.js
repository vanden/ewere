import { RECEIVE_TEAM,
         RECEIVE_ALL_TEAMS,
         REMOVE_TEAM } from '../actions/team_actions'


const defaultState = Object.freeze({})


const teamReducer = (state = defaultState, action) => {

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

export default teamReducer
