import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import fastLogo from '../../assets/images/experience/fast-logo-3.png'
import sfdLogo from '../../assets/images/experience/sfd-logo.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={fastLogo}
            color='#0A67B1'
            title='Fast Enterprises'
            link='https://www.fastenterprises.com'
            timeperiod='2018 - Present'
            subtitle='Working as product support team member 
            implemeting the Gentax software for the State of California.'
          />
          <ExperienceUnit
            logo={sfdLogo}
            color='#FFFFFF'
            title='Spectral Fusion Designs'
            link='http://hs.umt.edu/sfd/'
            timeperiod='2016-2018'
            subtitle='Built and maintained web applications for the University of Montana
            and other clients.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
