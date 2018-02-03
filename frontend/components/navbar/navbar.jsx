import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUser, logout, pathname}) => {

  let nav_button
  if (pathname === '/signup') {
    nav_button = <Link className="authbtn" to="/login" onClick={clearErrors}>Log In</Link>
  } else {
    nav_button = <Link className="authbtn" to="/signup" onClick={clearErrors}>Sign Up</Link>
  }

  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button className="authbtn" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="authlinks">
      {nav_button}
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">eWere</h1>
        {display}
    </header>
  )
}
