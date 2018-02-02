import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/')
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.state
    this.props.processForm(user)
  }

  handleDemoUserSignin(e) {
    e.preventDefault()

    let demoUser = {
      email: "guest@example.com",
      username: "guest",
      password:"password"
    }
    this.props.demoUserSignIn(demoUser)
      .then( () => {//should add to history, I guess
      })
    }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>
    } else {
      return <Link to="/login">log in instead</Link>
    }
  }

  renderErrors() {
    // How janky is this? FixMe
    if (this.props.errors && this.props.errors.length) {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to ewere!
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
        <input type="submit" value={this.props.formType} />
        <button className="button"
              onClick={(e) => this.handleDemoUserSignin(e)} >Demo User Sign In</button>

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
