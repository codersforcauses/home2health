import React, { Component } from 'react'
import Slide from '../components/slide'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'


export default class Slider extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        images: [
          "https://drive.google.com/open?id=1TFI1jp_Yr1erfX5b1Th8thtdY0BsS9Dx,jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
          "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
        ],
        currentIndex: 0,
        translateValue: 0
      }
    }
  
    goToPrevSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
          }
          
          // This will not run if we met the if condition above

          this.setState(prevState => ({
            currentIndex: this.currentIndex - 1,
            translateValue: currentIndex.translateValue + - (this.slideWidth())
          }));
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