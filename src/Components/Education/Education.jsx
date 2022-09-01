import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className="Education">
      <div className="section">
        <div className="sectionTitle" id="education">
          Education
        </div>
        <div className="bio">
          <li>Thammasat University (August 2016 - May 2020)</li>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bachelor of Science, Major in
            Statistics
          </p>
        </div>
        <div className="bio">
          <li>Junior Software Developer Bootcamp (Jan 2022 - Apr 2022)</li>
          <div>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Learned how to build web
              applications from React as front-end, Node.js as back end, and
              MongoDB as a Database
              <br />
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Learned essential skills for
              switching careers, such as growth mindset, communication, agile,
              and teamwork
              <br />
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Final Project: MERN Stack CRUD
              Project  The application website is divided into front-end using
              React with React-router  and Axios as the main dependency.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the back-end, it uses
              Express to manage RESTful API and uses PassportJS for
              authentication. Finally, using Mongoose to  connect MongoDB
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
