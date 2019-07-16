import React, { Component } from 'react'

class ProfileAbout extends Component {
  constructor(props) {
    super(props)
    this.state = {
        aboutme: 'Kurisu Makise is the deuteragonist and \
        lead heroine of the visual novel and anime series \
        Steins;Gate, as well as one of the main protagonists \
        of the sequel Steins;Gate 0. She is a young and \
        extremely talented neuroscience researcher.\nHer route \
        is the route that leads to the "true" and complete \
        ending of the game.',
        qualifications: 'On September 25th 2014, Kurisu Makise \
        won the AnimeBracket - Best Girl Contest, with 6620 votes. \
        She topped the Aquamarine 1 stage of the International Saimoe contest'
    }
  }

  render() {
    return (
      <div class="container" style={{ width: '90%' }}>
        <div class="section">
          <h4 style={{margin: '1rem 0 0 0'}}>About Me</h4>
          <p>{this.state.aboutme}</p>
        </div>
        <div class="divider" />
        <div class="section">
          <h4 style={{margin: '1rem 0 0 0'}}>Qualifications</h4>
          <p>{this.state.qualifications}</p>
        </div>
      </div>
    )
  }
}

export default ProfileAbout
