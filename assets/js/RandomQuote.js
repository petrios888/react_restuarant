import React, {Component} from 'react'
import { Parallax, Background } from 'react-parallax';



/*
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
/*/
export default function RandomQuote(){
  return (

    <section id="RandomQuote">
    <div className= "container">
  <Parallax strength={800}>
      <Background>
        <img src="http://www.colonelsretreat.com/system/special_slider/cooking.png"/>
        <div style={{

backgroundImage: `url(${"http://www.colonelsretreat.com/system/special_slider/cooking.png"})`,

height: '400%',
width: '1000%',
position: 'absolute'


              }}></div>

      </Background>
      <h1> "Good Painting is Like Good Cookingl It can Be Tasted, Not Explained." </h1>
      <span className="author"> -Johnny- </span>

  </Parallax>
  </div>
    </section>

  )
}
