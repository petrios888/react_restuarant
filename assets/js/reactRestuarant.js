import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Topimg from './Topimg.js'
import OurStory from './OurStory.js'
import SpecialMenu from './SpecialMenu.js'

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
      <OurStory />
      <SpecialMenu />
      </section>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
