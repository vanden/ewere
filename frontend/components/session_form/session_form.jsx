import React from 'react'
import { Link, withRouter } from 'react-router-dom'

let capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
    else { return '' }
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="blurb">
          <div className="slogan">
            Simple team project & task management
          </div>
          eWere helps your team track tasks and projects without itself becoming a project.
        </div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <h2>Welcome to eWere!</h2>
          <br/>
          <h3>Please {this.props.formType} or {this.navLink()}</h3>

          <div className="login-form-block">
            <div className="login-form-fields">
              <br/>
              <label>Username: </label>
              <input type="text"
                     value={this.state.username}
                     onChange={this.update('username')}
                     className="login-input"
                     />
              <br/>
              <label>Email: </label>
              <input type="text"
                     value={this.state.email}
                     onChange={this.update('email')}
                     className="login-input"
                     />
              <br/>
              <label>Password:</label>
              <input type="password"
                     value={this.state.password}
                     onChange={this.update('password')}
                     className="login-input"
                     />
              <br/>
            </div>
            <div className="login-buttons">
              <input className="authbtn" type="submit" value={capitalizeFirstLetter(this.props.formType)} />
              <button className="authbtn"
                      onClick={(e) => this.handleDemoUserSignin(e)} >Demo User</button>
            </div>
                    {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
