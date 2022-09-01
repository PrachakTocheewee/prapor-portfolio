import React from 'react'
import './Body.css'
import Cvphoto from './Cv-photo.jpg'

function Body() {
  return (
    <div>
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
          <p className="statement">
            Hello! I am Por
            <br /> I fell in love with programming
            <br /> I am a highly analytical individual with a systematic
            thinking process who eagers to learn new things. With background in
            mathematics, statistics, and data analysis, I would like to apply my
            background knowledge to pursue my career as a Software Developer.
          </p>
        </div>
      </header>
      <main className="wrapper">
        <div className="grid">
          <div className="section">
            <h3 className="sectionTitle" id="skills">
              Technical Skills
            </h3>
            <p className="bio"></p>
            <ul className="bio">
              <li>HTML</li>
              <li>CSS</li>
              <li>Git & GitHub</li>
              <li>Data Analysis with SPSS, R , and Microsoft Excel</li>
              <li>JavaScript</li>
              <li>C++</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="section">
            <h3 className="sectionTitle">Soft Skills</h3>
            <p className="bio"></p>
            <ul className="bio">
              <li>Agile & Scrum Methodology</li>
              <li>Growth Mindset</li>
              <li>Effective Problem Solving</li>
              <li>Knowledge Enthusiast for Skills Improvement</li>
            </ul>
          </div>

          <div className="section">
            <h3 className="sectionTitle" id="contact">
              Contact
            </h3>
            <p className="bio"></p>
            <ul className="bio">
              <li>
                <span className="bold">Mobile</span> 0860025138
              </li>
              <li>
                <span className="bold">E-mail</span>
                prachak.toc@gmail.com
              </li>
              <li>
                <span className="bold">GitHub</span>
                github.com/PrachakTocheewee
              </li>

              <li>
                <span className="bold">Address</span>
                22 Moo.5, Tambon Banbua , Kraset Sombun, Chaiyaphum, 36120 ,
                Thailand
              </li>
            </ul>
          </div>

          <div className="section">
            <h3 className="sectionTitle" id="interests">
              Interests
            </h3>
            <p className="bio"></p>
            <ul className="bio">
              <li>Websites Development</li>
              <li>Data Science</li>
              <li>Software Tester</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Body
