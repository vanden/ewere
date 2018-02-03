import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import SessionFormContainer from './session_form/session_form_container'
import NavBarContainer from './navbar/navbar_container'

import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div className="app">
    <Route path="/" component={NavBarContainer}/>
    <div className="main-window">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  </div>
)

export default App
