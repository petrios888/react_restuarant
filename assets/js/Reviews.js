import React, {Component} from 'react'

export default function Reviews(){
  var currentReview = function(){
    return (
      <div>
      <h5 className="comp-title"> Reviews </h5>
      <h2> The Food NetWork </h2>
      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
      rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
      tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
      leo ligula, porttitor eu, consequat </p>

      <div className="author"> <strong> GUy St.Louis</strong> - <em> Best Chef in New England</em></div>
      </div>
    )
  }
  return (
    <section id="Reviews">
    <div className="container">
    <div className="row">
    <div className="col-md-8">
    <div className="side-img">
      <img
      src ="http://www.85cbakerycafe.com/wp-content/uploads/2016/03/chef-01.png"
      />
    </div>
      </div>
      <div className="col-md-4">
        {currentReview()}
        <div className="arrows">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>

        <i className="fa fa-arrow-right ready" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
