import { render } from '@testing-library/react'
import React, { Component } from 'react'

const KODERS_JSON = [
  {
    name: 'Axel',
    age: 31,
    hobbies: ['Play', 'Drink every', 'pets', 'swwiming']
  },
  {
    name: 'Ivan',
    age: 29,
    hobbies: ['Basketball', 'chess', 'VideoJuegos', 'garden', 'play with son']
  },
  {
    name: 'Luis',
    age: 34,
    hobbies: ['Money money', 'pets', 'Social media']
  }
]

class Koders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      koders: []
    }
  }

  componentDidMount() {
    // -> Request
    // <- Response
    console.log('Server request')
    setTimeout(() => {
      console.log('Server Response')
      this.setState({
        koders: KODERS_JSON
      })
    }, 5000)
  }

  _renderKoders() {
    return this.state.koders.map(({ name, age, hobbies }) => {
      return (
        <li>
          {name}, {age} años
          <ul>
            {hobbies.map((hobbie) => (
              <li>{hobbie}</li>
            ))}
          </ul>
        </li>
      )
    })
  }



  render() {
    console.log('Render', this.state.koders)
    const { koders } = this.state
    return (
      <div>
        {
          koders.length ? (<ul>{this._renderKoders()}</ul>) : (<h1>No hay Koders</h1>)
        }
      </div>
    );
  }
}

export default Koders;