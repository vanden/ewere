import { RECEIVE_TASK,
         RECEIVE_ALL_TASKS,
         REMOVE_TASK,
         RECEIVE_TASK_ERRORS
       } from '../actions/task_actions'


const defaultState = Object.freeze({})


export const taskReducer = (state = defaultState, action) => {

  Object.freeze(state)

  switch (action.type) {

  case RECEIVE_TASK:
    const task = action.payload.task
    return Object.assign({}, state, { [task.id]: task } )

  case RECEIVE_ALL_TASKS:
    return Object.assign({}, action.tasks)

  case REMOVE_TASK:
    let newState = Object.assign({}, state)
    delete newState[action.payload.task.id]
    return newState

  default:
    return state
  }

}



