import React from 'react'

class projectForm extends React.Component {
  constructor(props) {
    super(props)
    console.error(props)
    this.state = this.props.project
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.warn(this.state)
    this.props.action(this.state).then(() => this.props.history.push('/'))
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    };
  }

  
  render() {

    const text = this.props.formType === 'new' ? "Create Project" : "Update Project"
    
    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label><p>Title</p>            </label>
              
              <input className="name-input"
                type="Project Name"
                value={this.state.name}
                onChange={this.update('name')} />

          </div>
          
          <div>
            <label>Project Description
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
          
          <input className="submit-button" type="submit" value={text} />
        </form>
      </div>
    )
  }
}


export default projectForm
