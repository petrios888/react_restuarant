import React, {Component} from 'react'

export default function Footer(){
  return (

    <footer>
    <div container="container">
    <nav className="menu">
      <a href="#">Our Story</a>
      <a href="#">Reviews</a>
      <a href="#">Special Menu</a>
      <a href="#">ContactUs</a>
    </nav>
      <ul className="social-media">
      <li>
      <a  href="http://www.facebook.com" target="new">
      <i  class="fa fa-facebook-square" aria-hidden="true"></i>
      </a>
      </li>
      <li>
      <a  href="http://www.twitter.com" target="new">
      <i class="fa fa-twitter-square" aria-hidden="true"></i>
      </a>
      </li>
      <li>
      <a  href="http://www.instagram.com" target="new">
      <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      </li>
      <li>
      <a  href="http://www.googleplus.com" target="new">
      <i class="fa fa-google-plus" aria-hidden="true"></i>
      </a>
      </li>

      </ul>
      <div className="copyright">
       © Copyright 2018
      </div>
    </div>

    </footer>

  )
}
