import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Paulo 👋</span>
        </h5>

        <h3 className="bold">
          Software developer optmizing the tax system for the state of california, 
          building mvps, and always learning new things.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
        <div className="footer">
          <Links />
        </div>
      </div>
      
      {/*<div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
        </div>*/}

    </div>
)

export default IndexPage
