import React from 'react'
import { Link } from 'react-router-dom'


const TeamIndexItem = props => {
  const id = props.team.id
  
  return (
    <li>
      <Link className="TeamLink" to={`/teams/${id}`}>{props.team.name}</Link>
    </li>
  )
}

export default TeamIndexItem

      // <Link to={`/teams/${id}/edit`}>Edit</Link>
      // <button onClick={() => props.deleteTeam(id)}>
      //   Delete
      // </button>
