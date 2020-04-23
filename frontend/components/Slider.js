import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import './Slider.css'

const numImages = 10
const Slider = props => {
  const AutoplaySlider = withAutoplay(AwesomeSlider)
  return (
    <div className="slider">
      <div className="slider-wrapper">
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={2000}>
          {[...Array(numImages).keys()].map((number, index) => (<div data-src={`images/landing/${number + 1}.jpg`} key={index} />))}
        </AutoplaySlider>
      </div>
    </div>
  )
}

export default Slider
