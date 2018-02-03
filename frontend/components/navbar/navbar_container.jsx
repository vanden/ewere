import React from 'react'
import {connect} from 'react-redux'
import NavBar from './navbar'
import { logout, clearErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => {

  return { currentUser: state.session.currentUser,
           pathname: ownProps.location.pathname }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
