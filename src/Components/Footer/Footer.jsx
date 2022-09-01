import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="gotop">
        <div className="role">
          <a href="#top">
            <button>Go to top</button>
          </a>
        </div>
      </div>
      &copy; {new Date().getFullYear()} Prachak Tocheewee
      <p className="byline">
        {' '}
        ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
      </p>
    </div>
  )
}
export default Footer
