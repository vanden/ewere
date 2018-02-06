import React from 'react'
//import TeamIndexItem from './team_index_item'

class TeamShow extends React.Component {

  constructor(props, ownProps) {
    super(props)
    console.log(ownProps)
    console.log("FROM TEAMSHOW CONSTRUCTOR")
  }

  componentDidMount() {
//    this.props.fetchTeams()
  }

  render () {
    return (
      <div className="teamshow">
        <h2>Teams Show Page</h2>
      </div>
    )
  }
}

export default TeamShow
