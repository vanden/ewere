import * as APIUtil from '../util/project_api_util'

export const RECEIVE_PROJECT = "RECEIVE_PROJECT"
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS"
export const REMOVE_PROJECT = "REMOVE_PROJECT"

// FixMe Not really sure how I will be handling errors
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS'
//export const REMOVE_PROJECT_ERRORS = 'REMOVE_PROJECT_ERRORS' // Needed? ThinkMore



export const getProject = (id) => dispatch => {
  return APIUtil.getProject(id)
    .then( project => dispatch(receiveProject(project)))
}


export const getAllProjects = () => dispatch => {
  return APIUtil.getAllProjects()
    .then( projects => dispatch(receiveAllProjects(projects)))
}


export const postProject = (newProject) => dispatch => {
  // Should this be decorating the project with the current user_id (as
  // owner_id) or leave that to the caller of the action? Probably
  // the latter, though doing it once in a single place is attractive.
  // (But, will there be more than a single place on the other end?
  // ThinkMore
  return APIUtil.postProject(newProject)
    .then( project => dispatch(receiveProject(project)),
           err => (dispatch(receiveProjectErrors(err.responseJSON))))
  // Error handling here? Am I doing this right? FixMe
}


export const updateProject = (project) => dispatch => {
  return APIUtil.updateProject(project)
    .then( editProject => dispatch(receiveProject(editProject)),
           err => (dispatch(receiveProjectErrors(err.responseJSON))))
  // Error handling here? Am I doing this right? FixMe
}


export const deleteProject = (id) => dispatch => {
  return APIUtil.deleteProject(id)
    .then( deadProject => dispatch(removeProject(deadProject)),
           err => (dispatch(receiveProjectErrors(err.responseJSON))))
  // Error handling here? Am I doing this right? FixMe)
}

const receiveProject = (payload) => {
  return {
    type: RECEIVE_PROJECT,
    payload
  }
}


const receiveProjectErrors = (errors) => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  }
}


const receiveAllProjects = (payload) => {
  return {
    type: RECEIVE_ALL_PROJECTS,
    payload
  }
}


const removeProject = (payload) => {
  return {
    type: REMOVE_PROJECT,
    payload
  }
}
