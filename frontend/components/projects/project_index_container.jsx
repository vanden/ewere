import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { getAllProjects, deleteProject, postProject, getProject } from '../../actions/project_actions';


const mapStateToProps = (state) => ({
  projects: Object.values(state.entities.projects)
})


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProjects: () => dispatch(getAllProjects()),
    deleteProject: (id) => dispatch(deleteProject(id)),
    postProject: () => dispatch(postProject(newProject)),
    getProject: (id) => dispatch(getProject(id))
  }}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)
