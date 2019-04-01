import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import ocdLogo from '../../assets/images/projects/ocd.png'
import ggcLogo from '../../assets/images/projects/ggc-logo.png'
const ogc = 'https://youtu.be/BpxqiIPT1IM'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={ocdLogo}
            color="#FFFFFF"
            title="Online Coaches Directory"
            link=""
            demoid="dhUYleT4iAk"
            timeperiod="2018"
            subtitle="Web application that allows users to search through 10,575+
            college coaches contact information with an easy to use platform."
          />
          <ExperienceUnit
            logo={ggcLogo}
            color="#C01448"
            title="Girls Get Coding!"
            link=""
            demoid="IzoLOVngkK4"
            timeperiod="2017"
            subtitle="Learning platform that helps young girls learn how to code
            using Snap! building block. Admin, tutor, parents and student dashboard built-in."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
