import React, {Component} from 'react'

export default function ContactUs(){
  return (
    <section id="ContactUs">
    <div className="container">
      <h5 className="title"> Contact Us</h5>
      <h2> Delicous falvor of Autunum</h2>

      <div className="box">
      <div className="row">
      <div className="col-md-6">
      <div className="title">
       Malden, Massachusetts
      </div>
      <h6 className="Address">
      166 Eastern Avenue <br/>
      Malden, MA 02148
      (781)321-8600
      </h6>
      <p>
      <strong>email</strong> <a href="contactus@sousakumalden.com"> contactus@sousakumalden.com</a>

      </p>

      </div>
      <div className="col-md-6">
      <h6>
      Phone:
      </h6>
      <div className="title">
      (781)321-8600
      </div>
      <h6>
        Lunch Service:
      </h6>
      <p>
        Friday,Saturday, and Sunday: <br/>
        Bookings from 12pm -1:30 pm
      </p>
      </div>

      </div>
      </div>
      </div>



    </section>
  )
}
