import React, {Component} from 'react'

export default function SpecialMenu(){
  return (
    <section id="SpecialMenu">
    <div className="container">
      <h5 className="title"> Special Menu</h5>

      <h2> Delicous falvor of Autunum</h2>
      <div className="row boxes">
      <div className="col-md-4">
        <div className="box">
          <div className="box-img">
            <div className="price-circle"> $25 </div>
          </div>

          <span className="title"> Super BBQ Grill no Smoke </span>
          <p className="details">Fired Eggs,Steak, baked Potatoes or french fries,
          sido of vegatables</p>
        </div>
      </div>
      <div className="col-md-4">
      <div className="box">
        <div className="box-img">
          <div className="price-circle"> $25 </div>
        </div>
        <span className="title"> Super BBQ Grill no Smoke </span>
        <p className="details">Fired Eggs,Steak, baked Potatoes or french fries,
        sido of vegatables</p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="box">
        <div className="box-img">
          <div className="price-circle"> $25 </div>
        </div>
        <span className="title"> Super BBQ Grill no Smoke </span>
        <p className="details">Fired Eggs,Steak, baked Potatoes or french fries,
        sido of vegatables</p>
      </div>
      </div>
      </div>
        <h2 href="#"> View Full Menu</h2>
      </div>



    </section>
  )
}
