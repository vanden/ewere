import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import SessionForm from './session_form'
import { login, signup, clearErrors } from '../../actions/session_actions'


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  }}


const mapDispatchToProps = (dispatch, ownProps) => {

  const formType = ownProps.location.pathname.slice(1)
  const processForm = (formType === 'login') ? login : signup

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    demoUserSignIn: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)

