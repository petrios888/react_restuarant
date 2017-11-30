import React, {Component} from 'react'

export default function Reviews(){
  var currentReview = function(){
    return (
      <div>
      <h5 className="comp-title"> Reviews </h5>
      <h2> The Food NetWork </h2>
      <p> Wan Chi "Boky" Chu is the creative and innovative Executive Chef at Sousaku Bistro in Malden, Massachusetts.  Since taking over as Executive Chef, he has made the menu his own by introducing a fresh, modern, contemporary, edgy new take on fusion cuisine.

Boky Chu was born/raised in Taiwan and speaks both Mandarin and Japanese.  He always had an interest in food since he was a young child.  His culinary career began in 1999 when he was 16 years old.

In Taiwan, after Boky Chu graduated from a cooking school in 1999, he first started his career at Furukawa Japanese Restaurant - a traditional Japanese style restaurant where he would later become a cooking chef.  In 2004, he took a cooking chef position at Wasabi Japanese Fusion Restaurant in Grand Formosa Regent Taipei - A Four Seasons Hotel in order to accumulate his knowledge and confidence in cooking.  In 2006, he seized the opportunity to work at Ebiten Japanese Cuisine as a Head Chef to manage and coordinate a team of excellent chefs.  This position led him to an opportunity to come over to the United States.

Chef Boky Chu's passion for food grows every day and he love sharing that passion with others. </p>

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
      src ="https://storage.googleapis.com/wzukusers/user-24011213/images/57f459ee1a4d8ZAwhM7t/IMG_1232.JPG"
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
