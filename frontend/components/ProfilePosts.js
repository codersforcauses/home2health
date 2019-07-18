import React, { Component } from 'react'

const PostItem = props => {
  return (
    <div class="card" style={{boxShadow: '0 0 0 0'}}>
      <div class="card-content">
        <div class="card-title">
          <a href="#">
            {props.title}
          </a>
          </div>
          <p class="truncate">{props.body}</p>
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
      <div class="container" style={{ width: '90%' }}>
        {this.state.posts.map(post => (
          <PostItem title={post.title} body={post.body} />
        ))}
      </div>
    )
  }
}

export default ProfilePosts
