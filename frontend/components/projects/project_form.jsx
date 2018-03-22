import React from 'react'

class projectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.project
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.action(this.state).then((action) =>{
      this.props.history.push(`/projects/${action.payload.project.id}`)})
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
              <input className="details-input"
                type="Project Name"
                value={this.state.name}
                onChange={this.update('name')} />
              </div>
          </div>
          
          <div className="form-fields">
            <label>Project Description </label>
            <div>
              <textarea className="details-input"
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
