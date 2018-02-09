import {RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS
       } from '../actions/session_actions'


const _nullUser = Object.freeze({ currentUser: null })


export const sessionReducer = (state = _nullUser, action) => {

  Object.freeze(state)

  switch(action.type) {

  case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    let newState = Object.assign({}, { currentUser })
    return newState

  default:
    return state
  }}


export const sessionErrorsReducer = (state = [], action) => {

  Object.freeze(state)

  switch (action.type) {

  case RECEIVE_SESSION_ERRORS:
    return action.errors

  case RECEIVE_CURRENT_USER:
    return []

  default:
    return state
  }
}
