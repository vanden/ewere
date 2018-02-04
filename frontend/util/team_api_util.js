export const getTeam = (id) => {
  return $.ajax({
    url: `/api/teams/${id}`,
    method: 'GET'
  })
}

export const getAllTeams = () => {
  return $.ajax({
    url: '/api/teams',
    method: 'GET'
  })
}

export const postTeam = (team) => {
  return $.ajax({
    url: '/api/teams',
    method: 'POST',
    data: { team }
  })
}

export const updateTeam = (team) => {
  return $.ajax({
    url: `/api/teams/${team.id}`,
    method: 'PATCH',
    data: { team }
  })
}

export const deleteTeam = (id) => {
  return $.ajax({
    url: `/api/teams/${id}`,
    method: 'DELETE'
  })
}

// ToDo will need team membership ones, too
