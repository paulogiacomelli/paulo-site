import React, { Component } from 'react'
import './style.scss'
import ModalVideo from 'react-modal-video'


class ExperienceUnit extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <div id="main" className="experience-unit col-xs-12 col-sm-6 col-md-4">
        { this.props.link ?  (
          <a href={this.props.link} target="_blank">
            <div
              className="image"
              style={{
                backgroundImage: `url(${this.props.logo})`,
                backgroundColor: this.props.color,
              }}>
            </div>
          </a>
        ) : (
          <a onClick={this.openModal}>
            <div
              className="image"
              style={{
                backgroundImage: `url(${this.props.logo})`,
                backgroundColor: this.props.color,
              }}>
            </div>
          </a>
        )} 
        
        <div className="title bold">
          {this.props.title}
        </div>
        <div className="time-period">
          {this.props.timeperiod}
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.demoid} onClose={() => this.setState({isOpen: false})} />
      </div>        
    )
  }
}

export default ExperienceUnit
