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

// Team memberships
// Seems silly to have a seperate file as there's not much, here

export const postTeamMembership = (teamMembership) => {
  return $.ajax({
    url: 'api/team_memberships/',
    method: 'POST',
    data: { team_membership: teamMembership }
  })
}


export const deleteTeamMembership = (id) => (
  $.ajax({
    url: `api/team_memberships/${id}`,
    method: 'DELETE',
  })
);
