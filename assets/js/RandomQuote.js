import React, {Component} from 'react'

export default function RandomQuote(){
  return (
    <section id="RandomQuote" style={{
        backgroundImage: "linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url('http://www.colonelsretreat.com/system/special_slider/cooking.png')"
    }}>
    <div className="container">
    <h1> "Good Painting is Like Good Cookingl It can Be Tasted, Not Explained." </h1>
    <span className="author"> -Johnny- </span>
    </div>
    </section>
  )
}
