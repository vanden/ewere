import React from 'react'
//import TeamIndexItem from './team_index_item'

class TeamShow extends React.Component {

  constructor(props, ownProps) {
    super(props)
    // console.log(props)
    // console.log("FROM TEAMSHOW CONSTRUCTOR")
  }

  componentDidMount() {
    this.props.getTeam(this.props.match.params.team_id)
  }

  componentWillReceiveProps(nextProps){
    // console.log('---------')
    // console.log(nextProps)
    // console.log("NEXT --^")
    if (this.props.match.params.team_id != nextProps.match.params.team_id) {
      this.props.getTeam(nextProps.match.params.team_id)
    }
//fetch team here
  }

  render () {
    if (!this.props.team) { return "Loading ..." }
    return (
      <div className="teamshow">
        <h2>Teams Show Page</h2>
        The TeamID: {this.props.team_id}
        <div className="team-show-name">{this.props.team.name}</div>
        <div className="team-show-description">{this.props.team.description}</div>

      </div>
    )
  }
}

export default TeamShow
