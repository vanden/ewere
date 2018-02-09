import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import ProjectShow from './project_show';
import { getAllProjects, deleteProject, postProject, getProject,
         updateProject } from '../../actions/project_actions';


const mapStateToProps = (state, ownProps) => {
  let project_id = ownProps.match.params.project_id
  return {
    project_id,
    project: state.entities.projects[project_id]// ,
    // team: state.entities.teams[project.team_id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    getProject: (id) => dispatch(getProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    updateProject: (proj) => dispatch(updateProject(proj))
  }}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow))
