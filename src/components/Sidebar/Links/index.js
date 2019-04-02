import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'
import resume from '../../../assets/images/experience/PauloGiacomelliResume.pdf'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/paulogiacomelli" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href={resume} target="_blank">
             <i className="fa fa-file-text"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/paulo-giacomelli-5521a78a" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:paulogiacomelli@hotmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div>
      </div>
    )
  }
}

export default Links