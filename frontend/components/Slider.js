import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import './Slider.css'

const Slider = props => {
  const AutoplaySlider = withAutoplay(AwesomeSlider)
  return (
    <div className="slider">
      <div className="slider-wrapper">
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={2000}>
          <div data-src="images/landing/1.jpg" />
          <div data-src="images/landing/2.jpg" />
          <div data-src="images/landing/3.jpg" />
          <div data-src="images/landing/4.jpg" />
          <div data-src="images/landing/5.jpg" />
          <div data-src="images/landing/6.jpg" />
          <div data-src="images/landing/7.jpg" />
          <div data-src="images/landing/8.jpg" />
          <div data-src="images/landing/9.jpg" />
          <div data-src="images/landing/10.jpg" />
        </AutoplaySlider>
      </div>
    </div>
  )
}

export default Slider
