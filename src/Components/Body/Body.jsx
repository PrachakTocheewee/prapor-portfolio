import React from 'react'
import './Body.css'
import Cvphoto from './Cv-photo.jpg'

function Body() {
  return (
    <div className="Body">
      <header className="hero">
        <img
          width="1600"
          height="1131"
          className="img"
          src="https://www.freepik.com/free-vector/gradient-galaxy-background_14658088.htm#query=galaxy&position=1&from_view=keyword"
          srcset="https://img.freepik.com/free-vector/gradient-galaxy-background_23-2148983655.jpg?w=740&t=st=1660807942~exp=1660808542~hmac=ee804e617889ce99f394ff928af0bb76ba3675b25eb1dac271718b722b8647d4"
          sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (max-width: 2400px) 2400px, 1200px"
        />
        <div className="gradient"></div>
        <div className="gradient2"></div>
        <div className="overlay">
          <div className="subtitle">Junoir Software Developer</div>
          <div className="title">Prachak Tocheewee (Por)</div>
          <div>
            <span className="role">
              💻 Developer <span className="invert">💻 Developer</span>
            </span>
            &nbsp;
            <span className="role">
              📈 Data Analyst <span className="invert">📈 Data Analyst</span>
            </span>
            &nbsp;
            <span className="role">
              ❕ Software Tester{' '}
              <span className="invert">❕ Software Tester</span>
            </span>
          </div>
          <img className="myPhoto" src={Cvphoto} />
          <div className="statement">
            <span className="bold">Hello!</span> I am Por and I fell in love
            with programming.
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;I am a highly analytical individual with a
              systematic thinking process who eagers to learn new things. With
              background in mathematics, statistics, and data analysis, I would
              like to apply my background knowledge to pursue my career as a
              Software Developer.
            </p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Body
