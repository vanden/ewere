import * as APIUtil from '../util/team_api_util'

// TODO Likely to want receive and delete team membership, too

export const RECEIVE_TEAM = "RECEIVE_TEAM"
export const RECEIVE_ALL_TEAMS = "RECEIVE_ALL_TEAMS"
export const REMOVE_TEAM = "REMOVE_TEAM"

// FixMe Not really sure how I will be handling errors
export const RECEIVE_TEAM_ERRORS = 'RECEIVE_TEAM_ERRORS'
//export const REMOVE_TEAM_ERRORS = 'REMOVE_TEAM_ERRORS' // Needed? ThinkMore

export const getTeam = (id) => dispatch => {
  return APIUtil.getTeam(id)
    .then( team => dispatch(receiveTeam(team)))
}


export const getAllTeams = () => dispatch => {
  return APIUtil.getAllTeams()
    .then( teams => dispatch(receiveAllTeams(teams)))
}


export const postTeam = (newTeam) => dispatch => {
  // Should this be decorating the team with the current user_id (as
  // creator_id) or leave that to the caller of the action? Probably
  // the latter, though doing it once in a single place is attractive.
  // (But, will there be more than a single place on the other end?
  // ThinkMore
  return APIUtil.postTeam(newTeam)
    .then( team => dispatch(receiveTeam(team)),
           err => (dispatch(receiveTeamErrors(err.responseJSON))))
  // Error handling here? Am I doing this right? FixMe
}


export const updateTeam = (team) => dispatch => {
  return APIUtil.updateTeam(team)
    .then( editTeam => dispatch(receiveTeam(editTeam)),
           err => (dispatch(receiveTeamErrors(err.responseJSON))))
  // Error handling here? Am I doing this right? FixMe
}


export const deleteTeam = (id) => dispatch => {
  return APIUtil.deleteTeam(id)
    .then( deadTeam => dispatch(removeTeam(deadTeam)),
           err => (dispatch(receiveTeamErrors(err.responseJSON))))
  // Error handling here? Am I doing this right? FixMe)
}

const receiveTeam = (team) => {
  return {
    type: RECEIVE_TEAM,
    team
  }
}


const receiveTeamErrors = (errors) => {
  return {
    type: RECEIVE_TEAM_ERRORS,
    errors
  }
}

const receiveAllTeams = (teams) => {
  return {
    type: RECEIVE_ALL_TEAMS,
    teams
  }
}


const removeTeam = (team) => {
  return {
    type: REMOVE_TEAM,
    team
  }
}

// Needed? ThinkMore
// const removeTeamErrors = () => {
//   return {
//     type: REMOVE_TEAM_ERRORS
//   }
// }
