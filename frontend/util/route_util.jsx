import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'


const Auth = ({ component: Component, path, loggedIn, exact }) => {

  return <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
}


const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => {
      if (loggedIn || path === '/login' || path === '/signup') {
        // This should probably be expanded to check if a user is a
        // member of a team before showing the team page, etc.
      return <Component {...props} />
      } else{
          return <Redirect to="/login" />
      }
    }} />
)


const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)}
}


export const AuthRoute = withRouter(
  connect(mapStateToProps, null)(Auth))


export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected))
