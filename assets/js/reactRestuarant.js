import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Topimg from './Topimg.js'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Cephas'
    }
  }
  render () {
    return (
      <div>
      <Header  />
      <section>
      <Topimg />
      </section>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
