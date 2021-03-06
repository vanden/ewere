import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ ERRORS'


export const signup = user => dispatch => {
  return APIUtil.signup(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}


export const login = user => dispatch => {
  return APIUtil.login(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (dispatch(receiveErrors(err.responseJSON))))
}


export const logout = () => dispatch => {
  return APIUtil.logout()
    .then((user) => (dispatch(receiveCurrentUser(null))))
}


export const clearErrors = () => dispatch => {
  return dispatch(receiveErrors([]))
}


const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
