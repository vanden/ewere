import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import projectForm from './project_form'
import { getProject, postProject, updateProject } from '../../actions/project_actions'

const mapStateToProps = (state, ownProps) => {

  let owner_id = state.session.currentUser.id
  let project;
  const formType = ownProps.match.path.split('/').pop()

  if (formType === "new") {
    const team_id = ownProps.match.params.team_id
    project = { name: "", description: "", team_id, owner_id  }
  }

  if (formType === "edit") {
    project = state.entities.projects[ownProps.match.params.project_id]
  }

  return { project, formType }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.path.split('/').pop()
  let action
  //  console.log(ownProps)

  // Rather than ternary or if else, two ifs so no unintended default
  // case can arise.
  if (formType === "new") {
    action = postProject
  }
  if (formType === "edit") {
    action = updateProject
  }
  return {
    getProject: id => dispatch(getProject(id)),
    action: project => dispatch(action(project))
  };
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(projectForm));
