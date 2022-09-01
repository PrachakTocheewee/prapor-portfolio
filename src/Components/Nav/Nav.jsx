import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <nav className="nav" id="top">
      <a className={'logolink'} href="/">
        <div className="monogram">Por</div>
      </a>

      <a className="link" href="#about">
        About
      </a>

      <a className="link" href="#education">
        Education
      </a>

      <a className="link" href="#projects">
        Project
      </a>

      <a className="link" href="#skills">
        Skills
      </a>

      <a className="link" href="#interests">
        Interests
      </a>

      <a className="link" href="#contact">
        Contact
      </a>

      <div className="social">
        <a
          className="link"
          href="https://www.facebook.com/prachak.mathematics"
          target="_blank"
        >
          <img
            className="socialicon"
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            sizes="0 0 16 16"
          />
        </a>
        <a
          className="link"
          href="https://github.com/PrachakTocheewee"
          target="_blank"
        >
          <img
            className="socialicon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/128px-Github-desktop-logo-symbol.svg.png?20200316183539"
            sizes="0 0 16 16"
          />
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/prachak-tocheewee-405475245/"
          target="_blank"
        >
          <img
            className="socialicon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
            sizes="0 0 16 16"
          />
        </a>
      </div>
    </nav>
  )
}
export default Nav
