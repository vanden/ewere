import React from 'react'
//import TeamIndexItem from './team_index_item'

//import TeamProjectsList from './team_project_list'

class TeamShow extends React.Component {

  constructor(props, ownProps) {
    super(props)
  }

  componentDidMount() {
    this.props.getTeam(this.props.match.params.team_id)
  }

  componentWillReceiveProps(nextProps){

    if (this.props.match.params.team_id != nextProps.match.params.team_id) {
      this.props.getTeam(nextProps.match.params.team_id)
    }

  }

  render () {

    if (!this.props.team) { return "Loading ..." }

    return (
      <div className="teamshow">
        <h2 className="showpage-heading">{this.props.team.name}</h2>
        <h3>Description</h3>
        <div className="team-show-description">{this.props.team.description}</div>
        <section className="team-members-list">
          <h3>Team Members</h3>
          <ul>
            {this.props.members.map( (member) => {
              return <li className="team-member"
                           key={member.id}>{member.username}
              </li>
              }
                                   )
            }
          </ul>
        </section>

      </div>
    )
  }
}

export default TeamShow
//          <TeamProjectsList projects={this.props.projects}/>      
     // <section className="team-projects-list">
     //      <h3>Team Projects</h3>
     //      <table>
     //        <thead>
     //          <tr>
     //            <th>Project Name</th>
     //            <th>Project Description</th>
     //          </tr>
     //        </thead>
     //        <tbody>
     //        {this.props.projects.map(
     //          (project) => {
     //            return <tr key={project.id}>
     //              <td>{project.name}</td>
     //                <td>{project.description}</td>
     //        </tr>})}
     //        </tbody>
     //      </table>
     //     </section>

