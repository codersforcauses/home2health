import React, { Component } from 'react'

class Slide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
      .then(res => res.json())
      .then(json => this.setState({ comments: json }))
  }

  render() {
    return (
      <div className="container" style={{ width: '90%' }}>
        <img src={this.props.image.src} />
      </div>
    )
  }
}

export default Slide
