import React from 'react';
import TeamIndexItem from './team_index_item';
//import TeamFormContainer from './team_form_container';

class TeamIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTeams()
  }

  render () {
    return (
      <div className="teamlist">
        <h2>Teams</h2>
        <ul>
          {this.props.teams.map( team => (
            <TeamIndexItem className="team-list-item"
              key={team.id}
              team={team}
              getTeam={this.props.getTeam}
              deleteTeam={this.props.deleteTeam}
              />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamIndex
