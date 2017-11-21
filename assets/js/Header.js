import React, { Component} from 'react'

export default function Header(){

  return (
    <header>
    <div className="container">
    <div className='logo'> Logo </div>
    <nav>
      <a href="#">Home </a>
      <a href="#">Party Platters </a>
      <a href="#">Locations  </a>
      <a href="#">Rewards  </a>
      <a href="#">Reservations  </a>
      <a href="#" className= "register-btn"> Register </a>
    </nav>
    </div>
    </header>
  )
}
