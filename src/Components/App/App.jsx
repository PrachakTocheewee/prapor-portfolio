import React from 'react'
import './App.css'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Nav from '../Nav/Nav'
import Body from '../Body/Body'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import Education from '../Education/Education'
import Interests from '../Interests/Interests'

function App() {
  return (
    <div className="area">
      <Nav />
      <Body />

      <div className="information">
        <Education />
        {/*<About />*/}
        <Projects />
        <Skills />
        <Interests />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
