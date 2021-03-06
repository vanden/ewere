import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ProjectShow from './project_show'
import { getAllProjects, deleteProject, postProject, getProject,
         updateProject } from '../../actions/project_actions'
import { getAllTasks } from '../../actions/task_actions'


const mapStateToProps = (state, ownProps) => {
  
  let project_id = ownProps.match.params.project_id
  return {
    project_id,
    project: state.entities.projects[project_id],
    tasks: state.entities.tasks
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    getProject: (id) => dispatch(getProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id)),
    updateProject: (proj) => dispatch(updateProject(proj)),
    getAllTasks: () => dispatch(getAllTasks())
  }}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow))
