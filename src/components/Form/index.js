import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MXNQuantity: 0,
      USDQuantity: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target: { value } }) {
    this.setState({
      MXNQuantity: value,
      USDQuantity: value / 21.60
    })
  }

  render() {
    const { MXNQuantity, USDQuantity } = this.state
    return (
      <div>
        <form>
          <input 
            type="number" 
            value={MXNQuantity} 
            onChange={this.handleChange}/>
        </form>
        <p>USD: ${USDQuantity}</p>
      </div>
    )
  }
}

export default Form