import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SideBarContainer from './sidebar/sidebar_container'
import DashBoardContainer from './dashboard/dashboard_container'

class MainPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainpage">
        <SideBarContainer />
        <DashBoardContainer />
      </div>

    )
  }
}

//        <TeamIndexContainer />

export default withRouter(MainPage)
