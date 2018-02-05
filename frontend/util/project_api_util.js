export const getProject = (id) => {
  return $.ajax({
    url: `/api/projects/${id}`,
  })
}


export const getAllProjects = () => {
  return $.ajax({
    url: '/api/projects',
    method: 'GET'
  })
}


export const postProject = (project) => {
  return $.ajax({
    url: '/api/projects',
    method: 'POST',
    data: { project }
  })
}


export const updateProject = (project) => {
  return $.ajax({
    url: `/api/projects/${project.id}`,
    method: 'PATCH',
    data: { project }
  })
}


export const deleteProject = (id) => {
  return $.ajax({
    url: `/api/projects/${id}`,
    method: 'DELETE'
  })
}
