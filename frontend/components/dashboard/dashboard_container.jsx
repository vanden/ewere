import { connect } from 'react-redux'
import DashBoard from './dashboard'
import { withRouter } from 'react-router-dom'

// ACTION IMPORTS? import { getAllTeams, deleteTeam, postTeam, getTeam } from '../../actions/team_actions';


const mapStateToProps = (state) => ({
  // SETTING STATE? teams: Object.values(state.teams)
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // PROBABLY NOT NEEDED HERE
    // fetchTeams: () => dispatch(getAllTeams()),
    // deleteTeam: (id) => dispatch(deleteTeam(id)),
    // postTeam: () => dispatch(postTeam(newTeam)),
    // getTeam: (id) => dispatch(getTeam(id))
  }}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashBoard))
