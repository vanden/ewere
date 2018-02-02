import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import SessionFormContainer from './session_form/session_form_container'

const App = () => (
  <div>
    <Link to="/" className="header-link">
      <h1>Hello, ewere world from react-redux land!</h1>
    </Link>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
)

export default App
