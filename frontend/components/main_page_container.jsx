import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MainPage from './main_page'


const mapStateToProps = (state, ownProps) => {

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    teams: state.teams,
    project: state.projects    
  }}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
