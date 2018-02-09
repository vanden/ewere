import React from 'react'

class projectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.project
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
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
          <div className="form-fields">
            <label>Title </label>
              <div>
              <input className="name-input"
                type="Project Name"
                value={this.state.name}
                onChange={this.update('name')} />
              </div>
          </div>
          
          <div className="form-fields">
            <label>Project Description </label>
            <div>
              <textarea className="name-input"
                value={this.state.description}
                onChange={this.update('description')} />
            </div>
          </div>
          
          <input className="submit-button" type="submit" value={text} />
        </form>
      </div>
    )
  }
}


export default projectForm
