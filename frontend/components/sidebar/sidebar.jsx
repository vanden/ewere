import React from 'react';

import TeamIndexContainer from '../teams/team_index_container.jsx'
import ProjectIndexContainer from '../projects/project_index_container.jsx'


class SideBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="sidebar">
        <TeamIndexContainer />
        <ProjectIndexContainer />
      </div>
    );
  }
}

export default SideBar;
