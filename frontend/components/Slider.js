import React, { Component } from 'react'
import Slide from '../components/slide'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'


export default class Slider extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        images: [
          {id: 0, src: "images/landing/1.jpg"},
          {id: 1, src: "images/landing/2.jpg"},
          {id: 2, src: "images/landing/3.jpg"},
          {id: 3, src: "images/landing/4.jpg"},
          {id: 4, src: "images/landing/5.jpg"},
          {id: 5, src: "images/landing/6.jpg"},
          {id: 6, src: "images/landing/7.jpg"},
          {id: 7, src: "images/landing/8.jpg"},
          {id: 8, src: "images/landing/9.jpg"},
          {id: 9, src: "images/landing/10.jpg"},
        ],
        currentIndex: 0,
        translateValue: 0
      }
    }

    slideWidth = () => {
      return document.querySelector('.slide').clientWidth;
   }
  
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }
          
          // This will not run if we met the if condition above
          this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
          }));
        }
  
    render() {
      return (
        <div className="slider">
  
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
          </div>
  
          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />
  
          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
        </div>
      );
    }
}