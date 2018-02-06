import React from 'react';
import ProjectIndexItem from './project_index_item';


class ProjectIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProjects()
  }

  render () {
    return (
      <div className="projectlist">
        <h2>Projects</h2>
        <ul>
          {this.props.projects.map( project => (
            <ProjectIndexItem className="project-list-item"
              key={project.id}
              project={project}
              getProject={this.props.getProject}
              deleteProject={this.props.deleteProject}
              />
          ))}
        </ul>
      </div>
    )
  }
}

export default ProjectIndex
