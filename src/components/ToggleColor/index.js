import React, { Component } from 'react'

// CSS
import './ToggleColor.css'

class ToggleColor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  handleClick() {
    this.setState({
      isActive: true
    })
  }

  render() {
    return(
      <div>
        <h2 className={this.state.isActive ? 'active' : null } >Texto</h2>
        <button onClick={() => this.handleClick()}>ToggleColor</button>
      </div>
    )
  }
}

export default ToggleColor