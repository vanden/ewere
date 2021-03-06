import { RECEIVE_PROJECT,
         RECEIVE_ALL_PROJECTS,
         REMOVE_PROJECT,
//       REMOVE_PROJECT_ERRORS, // Needed? ThinkMore
         RECEIVE_PROJECT_ERRORS
       } from '../actions/project_actions'
import { RECEIVE_TEAM } from '../actions/team_actions'

const defaultState = Object.freeze({})


export const projectReducer = (state = defaultState, action) => {

  Object.freeze(state)

  switch (action.type) {

  case RECEIVE_TEAM:
    return Object.assign({}, action.payload.projects)

  case RECEIVE_PROJECT:
    const project = action.payload.project
    return Object.assign({}, state, { [project.id]: project })

  case RECEIVE_ALL_PROJECTS:
    return Object.assign({}, action.payload.projects)

  case REMOVE_PROJECT:
    let newState = Object.assign({}, state)
    delete newState[action.payload.project.id]
    return newState

  default:
    return state
  }
}
