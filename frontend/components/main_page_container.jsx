import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MainPage from './main_page'
//import { login, signup, clearErrors } from '../../actions/session_actions'


const mapStateToProps = (state, ownProps) => {
  console.log(state)
  console.log(ownProps)
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    teams: state.teams,
    project: state.projects    
  }}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  console.log(dispatch)
  // put the relevANT thunk actions ie getAllTeam in the props
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
