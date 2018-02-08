import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import TeamShow from './team_show';
import { getAllTeams, deleteTeam, postTeam, getTeam } from '../../actions/team_actions';


const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  // console.log(state)
  // console.log("From team show container map state to props")
  return {

//    team_id: ownProps.match.params.team_id,

    // David suggested, but undefined. Async? Or, borked? I had the
    // team_id one Aaron agreed this the way to go. Needs a
    // conditional guard. (Don't really understand. But, only set it
    // if not null in state. WUT
    team: state.entities.teams[ownProps.match.params.team_id],
    members: Object.values(state.entities.members),
    projects: Object.values(state.entities.projects)
  }
  //  teams: Object.values(state.teams)
}

const mapDispatchToProps = (dispatch, ownProps) => {
//  console.log(ownProps)
  return {
    getTeam: (id) => dispatch(getTeam(id))
  }}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamShow))
