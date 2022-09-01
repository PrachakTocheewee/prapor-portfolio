import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className="Projects">
      <div className="section">
        <div className="sectionTitle" id="projects">
          My Projects
        </div>
        <div className="sectionSubTitle">1. Find Your Hat</div>
        <p className="des">
          &nbsp;&nbsp;&nbsp;&nbsp;Interactive terminal game that the player has
          lost their hat and they must navigate back to it without falling in to
          the holes.
          <a
            className="projectlink"
            href="https://replit.com/@PrachakTocheewe/find-yourhat#
index.js"
            target="_blank"
          >
            <br />
            <button className="btnproject">view</button>
          </a>
        </p>

        <p className="sectionSubTitle">2. Jammming</p>
        <p className="des"></p>
        <p className="des">
          &nbsp;&nbsp;&nbsp;&nbsp;React web application creating a playlist with
          the Spotify API which allows users to search the Spotify library,
          create a customized playlist, then save it to their Spotify accounts.
          <a
            className="projectlink"
            href="http://prachak32-jammming.surge.sh"
            target="_blank"
          >
            <br />
            <button className="btnproject">view</button>
          </a>
        </p>

        <p className="sectionSubTitle">3. Infinity Health</p>
        <p className="des">
          &nbsp;&nbsp;&nbsp;&nbsp;An exercise-tracker using MERN stack website
          which allows users to keep records of their excercise
          activities-adding, editing, deleting their activities with reminders
          and their achieved milestones
          <a
            className="projectlink"
            href="https://infinity-health.vercel.app/"
            target="_blank"
          >
            <br />
            <button className="btnproject">view</button>
          </a>
        </p>

        <p className="sectionSubTitle">
          4. Forecasting Electricity Power Demand in Metropolitan and Provincial
          Areas Using Decomposition Method with Seasonal ARIMA and Modified
          SARIMA Model
        </p>
        <p className="des">
          &nbsp;&nbsp;&nbsp;&nbsp;Final year project: Studied and compared
          time-series forecasting method 4 method with 3 data set of electricity
          power demand in Thailand.
        </p>
      </div>
    </div>
  )
}

export default Projects
