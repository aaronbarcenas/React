import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    console.log("Constructor")
  }

  componentDidMount() {
    console.log("Componentte montado ComponentDidMount()")
    this.setState({
      counter: 1
    })
  }

  componentDidUpdate() {
    console.log("El componente se actualizo")
  }
/*
  clickAddHandler() {
    let { counter } = this.state
    this.setState({
      counter: counter + 1
    })
  }

  clickRestHandler() {
    let { counter } = this.state
    this.setState({
      counter: counter - 1
    })
  }
*/
  clickHandler(operador) {
    let { counter } = this.state
    if ( operador === 'add' ) {
      counter ++
    } else {
      counter --
    }
    this.setState({
      counter
    })
  }

  render() {
    console.log("Render", this.state.counter)
    return (
    <div>
      <h1>Counter: {this.state.counter}</h1>
      {/*<button onClick={() => this.clickAddHandler()}>Add</button>
      <button onClick={() => this.clickRestHandler()}>Rest</button>*/}
      <button onClick={() => this.clickHandler('add')}>Add</button>
      <button onClick={() => this.clickHandler('rest')}>Rest</button>
    </div>
    
    )
  }
}

export default Counter 