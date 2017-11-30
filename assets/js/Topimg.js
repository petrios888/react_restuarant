import React, {Component} from 'react'
import globalState from './state/globalState.js'



export default function Topimg(){
  var companyInfo = {
    title: 'sousaku bistro japanese Topos & Bar',
    phone: '888-888-8888',
    location: 'Malden,MA'
  }


  console.log(companyInfo.title)
  return (
    <section id="Topimg">
    <div className="container">
    <div className="title">
    <h5>
      {companyInfo.title}
    </h5>
    <h1>
      Welcome
    </h1>
    <div className="contact-info">
      <div className="booking">  Book Table Directly</div>
        <h2>888-888-8888</h2>
        <div className="hours">
          Opening Hours <strong> Mon- Fir</strong> 9am -9pm
        </div>
    </div>
    </div>
    </div>
    </section>
  )
}
