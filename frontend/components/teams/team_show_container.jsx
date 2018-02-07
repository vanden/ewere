import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import TeamShow from './team_show';
import { getAllTeams, deleteTeam, postTeam, getTeam } from '../../actions/team_actions';


const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  console.log(state)
  console.log("From team show container map state to props")
  return {

    team_id: ownProps.match.params.team_id,

    // David suggested, but undefined. Async? Or, borked?
    // I had the team_id one
    team: state.teams[ownProps.match.params.team_id]
  }
  //  teams: Object.values(state.teams)
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    getTeam: (id) => dispatch(getTeam(id))
  }}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamShow))
