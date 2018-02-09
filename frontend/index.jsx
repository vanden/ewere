// Copyright 2018 Brian van den Broek vanden@gmail.com

// This file is part of ewere.

//     ewere is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.

//     ewere is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with ewere.  If not, see <http://www.gnu.org/licenses/>.


import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/store'

import Root from './components/root'


// FixMe Delete once done testing
import { login, logout, signup } from './util/session_api_util'
import { getAllTeams, getTeam,
         postTeam, updateTeam, deleteTeam,
         deleteTeamMembership, postTeamMembership
       } from './util/team_api_util'
import { getAllProjects, getProject,
         postProject, updateProject, deleteProject
       } from './util/project_api_util'

// FixMe Here for testing
// window.deleteTeamMembership = deleteTeamMembership
// window.postTeamMembership = postTeamMembership
// window.getTeam = getTeam
// window.getAllTeams = getAllTeams
// window.postTeam = postTeam
// window.updateTeam = updateTeam
// window.deleteTeam = deleteTeam
// window.getProject = getProject
// window.getAllProjects = getAllProjects
// window.postProject = postProject
// window.updateProject = updateProject
// window.deleteProject = deleteProject
// window.getState = store.getState
// window.dispatch = store.dispatch
// window.login = login
// window.logout = logout
// window.signup = signup


// Move into EventListener once done testing //TODO
let store = configureStore()


document.addEventListener('DOMContentLoaded', () => {

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } }
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={ store } />, root)
});


