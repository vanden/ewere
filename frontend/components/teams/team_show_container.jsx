import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import TeamShow from './team_show';
import { getTeam } from '../../actions/team_actions';
import { postProject } from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {

  return {

    // David suggested, but undefined. Async? Or, borked? I had the
    // team_id one Aaron agreed this the way to go. Needs a
    // conditional guard. (Don't really understand. But, only set it
    // if not null in state. WUT
    team: state.entities.teams[ownProps.match.params.team_id],
    members: Object.values(state.entities.members),
    projects: Object.values(state.entities.projects),
    errors: state.errors.team
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    getTeam: (id) => dispatch(getTeam(id)),
    postProject: (newProject) => dispatch(newProject(newProject))
  }}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamShow))
