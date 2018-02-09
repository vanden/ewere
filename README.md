# eWere

Live version: [eWere](https://ewere.herokuapp.com/)

eWere is a light weight task management app for teams closely inspired
by [Asana](https://asana.com/).

##  Features

Users are members of Teams, Team have Projects and, when it is
implemented, Projects will have Tasks.

+ User Authenticiation
+ Team Show
+ Full Project CRUD cycle
+ Task backend implemented

## Technologies used

+ Ruby on Rails backend
  + jBuilder for the api views
+ PostgreSQL database
+ React + Redux frontend
+ SCSS for styling



## Example Screenshots

### Login Screen


![alt text](https://github.com/vanden/ewere/blob/master/app/assets/images/ewere_login_page.png
"eWere Login Screen")

### Project Show Page

![alt text](https://github.com/vanden/ewere/blob/master/app/assets/images/ewere_project_show_page.png
"eWere Project Show Page")

### Project Show Page

![alt text](https://github.com/vanden/ewere/blob/master/app/assets/images/ewere_team_show_page.png
"eWere Project Show Page")

## Technical Features

### Common New and Edit Components

As the forms for creating a Project and editing an existing project are
so similar, a single component was used.

The URL for editing or creating a Project includes a string indicating
which feature is being drawn upon. The `ProjectFormContainer` draws on
that to set a form type property in its `mapStateToProps` method:

    const mapStateToProps = (state, ownProps) => {

      let owner_id = state.session.currentUser.id
      let project
      const formType = ownProps.match.path.split('/').pop()

      // Rather than a ternary or an if else, an if and else if are used
      // so that no unintended default case can arise.
      if (formType === "new") {
        const team_id = ownProps.match.params.team_id
        project = { name: "", description: "", team_id, owner_id  }
      } else if (formType === "edit") {
        project = state.entities.projects[ownProps.match.params.project_id]
      }

      return { project, formType }
    }


and also in its `mapDispatchToProps` method to set the appropriate
action for the form to invoke on submission:


    const mapDispatchToProps = (dispatch, ownProps) => {
      const formType = ownProps.match.path.split('/').pop()
      let action

      // As above; else if to block an accidental default.
      if (formType === "new") {
        action = postProject
      } else if (formType === "edit") {
        action = updateProject
      }
      return {
        getProject: id => dispatch(getProject(id)),
        action: project => dispatch(action(project))
      }
    }


The render method the `projectFrom` Component:

      render() {

        const text = this.props.formType === 'new' ? "Create Project" :
        "Update Projec    t"

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

## Future Directions

+ Finish full CRUD cycle for Teams
+ Implement Tasks on the frontend, with full CRUD cycle
+ Allow Users to join Projects and be invited to projects by email notification

## License

eWere is made available under the [GNU AFFERO GENERAL PUBLIC LICENSE
Version 3](https://www.gnu.org/licenses/agpl-3.0.en.html) or, at your
option, any later version.
