import React from 'react';
import {
//  Link,
  Route,
  Switch
} from 'react-router-dom'
// import TeamIndexItem from './team_index_item';
// //import TeamFormContainer from './team_form_container';

import { AuthRoute, ProtectedRoute } from '../../util/route_util'

import TeamShowContainer from '../teams/team_show_container.jsx'




class DashBoard extends React.Component {

  constructor(props, ownProps) {
    super(props)
    console.log(ownProps)
    console.log(props)
    console.log("FROM DashBoard constructor")
  }

  componentDidMount() {
    // console.log(this.props)
  }

  componentWillReceiveProps(props, ownProps) {
    console.log(props)
    console.log(ownProps)
    console.log("^-----------DASHBOARD WILL RECIEVE -------")
  }

  

  render () {
    console.log(this.props)
    console.log("FROM DashBoard Render")
    return (
      <div className="dashboard">
        <h4>Hello Sad Dashboard World</h4>
        <Switch>
          <Route exact path='/teams/:team_id' component={TeamShowContainer} />
        </Switch>
      </div>
    )
  }
}

export default DashBoard
// NUL CHANGE TO FORCE HEROKU UPDATE
