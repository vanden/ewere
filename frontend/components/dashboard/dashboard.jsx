import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from '../../util/route_util'

import TeamShowContainer from '../teams/team_show_container'
import ProjectFormContainer from '../projects/project_form_container'
import ProjectShowContainer from '../projects/project_show_container'



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
            <Route exact path='/team/:team_id/projects/new'
                   component={ProjectFormContainer} />
            <Route path='/projects/:project_id/edit'
                   component={ProjectFormContainer} />

          </Switch>
        </div>
      </div>
    )
  }
}

export default DashBoard
