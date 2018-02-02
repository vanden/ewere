import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/store'

import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()

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


import { login, logout, signup } from './util/session_api_util'

// FixMe Here for testing
window.getState = store.getState
window.dispatch = store.dispatch

window.login = login
window.logout = logout
window.signup = signup
