import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className="Skills" id="skills">
      <div className="Skillscontainer">
        <div className="section">
          <div className="sectionTitle">Technical Skills</div>
          <div className="bio"></div>
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
          <div className="sectionTitle">Soft Skills</div>
          <div className="bio"></div>
          <ul className="bio">
            <li>Agile & Scrum Methodology</li>
            <li>Growth Mindset</li>
            <li>Effective Problem Solving</li>
            <li>Knowledge Enthusiast for Skills Improvement</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
