import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class MainPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div> 
        <h3>Hello Main Page World</h3>
      </div>

    )
  }
}


export default withRouter(MainPage)
