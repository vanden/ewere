import React from 'react'
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {

  constructor(props, ownProps) {
    super(props)
  }

  componentDidMount() {
    this.props.getProject(this.props.match.params.project_id)
  }

  componentWillReceiveProps(nextProps){
    const nextProject_id = nextProps.match.params.project_id
    if (this.props.match.params.project_id != nextProject_id)
      this.props.getProject(nextProject_id)
  }

  render () {

    // The second clause being needed suggests that there may have
    // been two distinct api calls, here. Not great. FixMe
    if (!this.props.project || !this.props.project.team) {return "Loading ..."}

    const project = this.props.project
    const project_id = project.id
    const team_id = project.team_id

    return (
      <div className="projectshow">
        <div className="showpage-header">
          <div>
            <h2 className="showpage-heading">{this.props.project.name}</h2>
          </div>
          <div className="link-container">

            <Link className="form-link"
                  to={`/projects/${project_id}/edit`} >Edit</Link>
            <Link className="delete-link" to={`/`} onClick={() => {this.props.deleteProject(project.id)}}>Delete</Link>

          </div>
        </div>
        <h3>Description</h3>
        <div className="project-show-description">{this.props.project.description}</div>

        <h3>Team</h3>
        <div className="project-show-team">{this.props.project.team.name}</div>

        <h3>Tasks</h3>
        <div className="project-show-tasks">Tasks will go here once implemented</div>
      </div>
    )
  }
}

export default ProjectShow
