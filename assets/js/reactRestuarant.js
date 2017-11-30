import React, { Component} from 'react'
import ReactDOM from 'react-dom'
//import globalState from './state/globalState.js'
import Header from './Header.js'
import Topimg from './Topimg.js'
import OurStory from './OurStory.js'
import SpecialMenu from './SpecialMenu.js'
import RandomQuote from './RandomQuote.js'
import Reviews from './Reviews.js'
import ContactUs from './ContactUs.js'
import Footer from './Footer.js'


//import ContactUs from './ContactUs.js'


class Layout extends React.Component {
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
      <RandomQuote />
      <Reviews />
      <ContactUs />
      </section>
      <Footer />
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />,app)
