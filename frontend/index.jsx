import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/store'

import Root from './components/root'

// FixMe Delete once done testing
import { login, logout, signup } from './util/session_api_util'
import { getAllTeams, getTeam,
         postTeam, updateTeam, deleteTeam } from './util/team_api_util'


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



// FixMe Here for testing

window.getTeam = getTeam
window.getAllTeams = getAllTeams
window.postTeam = postTeam
window.updateTeam = updateTeam
window.deleteTeam = deleteTeam
console.log(getTeam)
window.getState = store.getState
window.dispatch = store.dispatch

window.login = login
window.logout = logout
window.signup = signup
