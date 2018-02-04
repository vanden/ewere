import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


const _nullUser = Object.freeze({ currentUser: null })


const sessionReducer = (state = _nullUser, action) => {

  Object.freeze(state)

  switch(action.type) {

  case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
    // Is Object.assign really needed here? User was an argument, not
    // state. QUESTION
    let newState = Object.assign({}, { currentUser })
    //console.log(newState)
    return newState

  default:
    return state
  }}


export default sessionReducer
