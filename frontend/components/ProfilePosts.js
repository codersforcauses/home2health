import React, { Component } from 'react'

const PostItem = props => {
  return (
    <div className="card grey lighten-5" style={{ boxShadow: '0 0 0 0' }}>
      <div className="card-content">
        <div className="card-title">
          <a href="#">{props.title}</a>
        </div>
        <p className="truncate">{props.body}</p>
      </div>
    </div>
  )
}

class ProfilePosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(res => res.json())
      .then(json => this.setState({ posts: json }))
  }

  render() {
    return (
      <div className="container" style={{ width: '90%' }}>
        {this.state.posts.length ? (
          this.state.posts.map(post => (
            <PostItem title={post.title} body={post.body} />
          ))
        ) : (
          <h5
            className="center-align"
            style={{ marginTop: '5em', marginBottom: '5em' }}
          >
            It's so cold and lonely here...
          </h5>
        )}
      </div>
    )
  }
}

export default ProfilePosts
