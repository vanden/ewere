import React from 'react'
import { Link } from 'react-router-dom'

export default ({ currentUser, logout }) => {
  console.log(currentUser)
  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button className="authbtn" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="authlinks">
      <Link className="authbtn" to="/signup">Sign Up</Link>
      <Link className="authbtn" to="/login">Log In</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">eWere</h1>
      <div>
        {display}
      </div>
    </header>
  )
}
