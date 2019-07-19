import React, { Component } from 'react'

const CommentItem = props => {
  return (
    <div class="card grey lighten-5" style={{ boxShadow: '0 0 0 0' }}>
      <div class="card-content">
        <div class="card-title">
          <a href="#">{props.title}</a>
        </div>
        <p class="truncate">{props.body}</p>
      </div>
    </div>
  )
}

class ProfileComments extends Component {
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
      <div class="container" style={{ width: '90%' }}>
        {this.state.comments.length ? (
          this.state.comments.map(comment => (
            <CommentItem title={comment.name} body={comment.body} />
          ))
        ) : (
          <h5
            class="center-align"
            style={{ marginTop: '5em', marginBottom: '5em' }}
          >
            Shhhh
          </h5>
        )}
      </div>
    )
  }
}

export default ProfileComments
