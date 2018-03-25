import * as APIUtil from '../util/task_api_util'

export const RECEIVE_TASK = "RECEIVE_TASK"
export const RECEIVE_ALL_TASKS = "RECEIVE_ALL_TASKS"
export const REMOVE_TASK = "REMOVE_TASK"

// FixMe Not really sure how I will be handling errors
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS'
//export const REMOVE_TASK_ERRORS = 'REMOVE_TASK_ERRORS' // Needed? ThinkMore


export const getTask = (id) => dispatch => {
  return APIUtil.getTask(id)
    .then( payload => dispatch(receiveTask(payload)) )
}


export const getAllTasks = () => dispatch => {
  return APIUtil.getAllTasks()
    .then( tasks => dispatch(receiveAllTasks(tasks)) )
}


export const postTask = (newTask) => dispatch => {
  return APIUtil.postTask(newTask)
    .then( task => dispatch(receiveTask(task)),
           err => (dispatch(receiveTaskErrors(err.responseJSON))) )
}


export const updateTask = (task) => dispatch => {
  return APIUtil.updateTask(task)
  // Not loving my naming convention here and in other action.js files FixMe
    .then( editTask => dispatch(receiveTask(editTask)),
           err => (dispatch(receiveTaskErrors(err.responseJSON))) )
}


export const deleteTask = (id) => dispatch => {
  return APIUtil.deleteTask(id)
    .then ( deadTask => dispatch(removeTask(deadTask)),
            err => (dispatch(receiveTaskErrors(err.responseJSON))) )
}


const receiveTask = (payload) => {
  return {
    type: RECEIVE_TASK,
    payload
  }
}


const receiveTaskErrors = (errors) => {
  return {
    type: RECEIVE_TASK_ERRORS,
    errors
  }
}


const receiveAllTasks = (tasks) => {
  return {
    type: RECEIVE_ALL_TASKS,
    tasks
  }
}


const removeTask = (payload) => {
  return {
    type: REMOVE_TASK,
    payload
  }
}
