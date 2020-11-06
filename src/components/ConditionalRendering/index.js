import React, { Component } from 'react'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveState: false
    }
  }

  render() {
    const {
      props: { isActive },
      state: { isActiveState }
    } = this

    return (
      <div>
        {isActive ? <h1>Prop Activo</h1> : <h1>Prop Inactivo</h1>} 
        {isActiveState ? <h1>State Activo</h1> : <h1>State Inactivo</h1>}
      </div>
    )
    
  }
}

export default ConditionalRendering

