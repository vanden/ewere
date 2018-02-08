import React from 'react'


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
    return (
      <div className="projectshow">
        <h2>Projects Show Page</h2>
      </div>
    )
  }
}

export default ProjectShow
