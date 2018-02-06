import React from 'react'
import { Link } from 'react-router-dom'


const ProjectIndexItem = props => {
  const id = props.project.id
  
  return (
    <li>
      <Link className="ProjectLink" to={`/projects/${id}`}>{props.project.name}</Link>
    </li>
  )
}

export default ProjectIndexItem
