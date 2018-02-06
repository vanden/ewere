import React from 'react';
// import TeamIndexItem from './team_index_item';
// //import TeamFormContainer from './team_form_container';

class DashBoard extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // DON"T KNOW IF NEEDED, yet//this.props.fetchTeams()
  }

  render () {
    return (
      <div className="dashboard">
        HELLO DASHBOARD WORLD
      </div>
    )
  }
}

export default DashBoard
