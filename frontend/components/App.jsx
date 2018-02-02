import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import SessionFormContainer from './session_form/session_form_container'
import NavBarContainer from './navbar/navbar_container'

import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <Link to="/" className="header-link">
      <h1>Hello, ewere world from react-redux land!</h1>
    </Link>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
)

export default App
