import { connect } from 'react-redux';
import TeamIndex from './team_index';
import { getAllTeams, deleteTeam, postTeam, getTeam } from '../../actions/team_actions';


const mapStateToProps = (state) => ({
  teams: Object.values(state.entities.teams)
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTeams: () => dispatch(getAllTeams()),
    deleteTeam: (id) => dispatch(deleteTeam(id)),
    postTeam: () => dispatch(postTeam(newTeam)),
    getTeam: (id) => dispatch(getTeam(id))
  }}

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex)
