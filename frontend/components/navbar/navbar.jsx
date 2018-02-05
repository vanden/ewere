import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUser, logout, pathname, clearErrors }) => {

  let nav_button
  if (pathname === '/signup') {
    nav_button = <Link className="authbtn" to="/login" onClick={clearErrors}>Log In</Link>
  } else {
    nav_button = <Link className="authbtn" to="/signup" onClick={clearErrors}>Sign Up</Link>
  }

  const display = currentUser ? (
    <div className="welcome"  className="authlinks">
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
      <Link to="/" className="logo" >
        <h1 >eWere</h1>
      </Link>
        {display}
    </header>
  )
}
