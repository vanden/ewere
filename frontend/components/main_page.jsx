import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SideBarContainer from './sidebar/sidebar_container.jsx'


class MainPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div> 
        <h3>Hello Main Page World</h3>
        <SideBarContainer />
      </div>

    )
  }
}
//        <DashboardContainer />

//        <TeamIndexContainer />

export default withRouter(MainPage)
