import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProjectForm from './project_form'
import { getProject, postProject, updateProject } from '../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {
  // Also going to need the team id. Where from? Ru-uh
  let project = { name: "", description: "" }
  let formType = "new"
  if (ownProps.match.path == "/projects/:project_id/edit") {
    project = state.projects[ownProps.match.params.project_id]
    formType = "edit"
  }
  return { project, formType }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  const action = ownProps.match.path === "/" ? postProject : updateProject;
  return {
    getProject: id => dispatch(getProject(id)),
//    action: post => dispatch(action(post)) // uncertain about the
//    action clause, above. Why would the path ever be '/'? So, must
//    log to adapt.
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm));
