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
import ProjectShowContainer from '../projects/project_show_container.jsx'




class DashBoard extends React.Component {

  constructor(props, ownProps) {
    super(props)

  }

  componentDidMount() {

  }

  componentWillReceiveProps(props, ownProps) {

  }

  

  render () {

    return (
      <div className="dashboard">
        <div className="display-space">
          <Switch>
            <Route exact path='/teams/:team_id' component={TeamShowContainer} />
            <Route exact path='/projects/:project_id'
                   component={ProjectShowContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default DashBoard
