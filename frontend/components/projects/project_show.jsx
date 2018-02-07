import React from 'react'


class ProjectShow extends React.Component {

  constructor(props, ownProps) {
    super(props)
  }

  componentDidMount() {
    //    this.props.fetchProjects()
  }

  componentWillReceiveProps(){
    //fetch project here
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
