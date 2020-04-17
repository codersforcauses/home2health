import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'
import './Slider.css'

const images = [
  "images/landing/1.jpg",
  "images/landing/2.jpg",
  "images/landing/3.jpg",
  "images/landing/4.jpg",
  "images/landing/5.jpg",
  "images/landing/6.jpg",
  "images/landing/7.jpg",
  "images/landing/8.jpg",
  "images/landing/9.jpg",
  "images/landing/10.jpg"
]

const imageTags = images.map((image, index) => (<div data-src={image} key={index} />))

const Slider = props => {
  const AutoplaySlider = withAutoplay(AwesomeSlider)
  return (
    <div className="slider">
      <div className="slider-wrapper">
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={2000}>
          {imageTags}
        </AutoplaySlider>
      </div>
    </div>
  )
}

export default Slider
