import React from 'react'
import './About.css'
import Cvphoto from './Cv-photo.jpg'

function About() {
  return (
    <section className="About">
      <h1>PRACHAK TOCHEEWEE (POR)</h1>
      <h2>Junoir Software Developer</h2>
      <div className="main">
        <h2>About Me</h2>
        <p>
          &nbsp;&nbsp;I am a highly analytical individual with a systematic
          thinking process who eagers to learn new things. With background in
          mathematics, statistics, and data analysis, I would like to apply my
          background knowledge to pursue my career as a Back-End Developer.
        </p>
        <img className="myPhoto" src={Cvphoto} />
        <p>Hi. I am Por and I love coding!!!</p>
      </div>
    </section>
  )
}

export default About
