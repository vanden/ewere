import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class MainPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log("HERE")
    return (
      <div> 
        <h3>Hello Main Page World</h3>
      </div>

    )
  }
}


export default withRouter(MainPage)
