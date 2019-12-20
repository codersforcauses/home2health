import React from 'react'
import Axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'

import './post.css'
/*
The ideal POST REQUEST OF THIS PAGE IS
{
  postid: -- (int) - can be taken via router query request
}

The ideal POST RESPONSE OF THIS PAGE IS
{
  {
    title:--, (string)
    author: --, (string)
    datetime: --, (string - datetime)
    post: -- (string - rich text format -> NOTE : Not sure what to use for this one as the post can have various positioning),
    categories: [], (array of strings)
  }
  ... more items for post (n number of post... not yet decided)
}
*/

const PostLanding = props => {
  const { title, author, datetime, previewDetails, headerImageUrl } = props
  return (
    <header
      class="masthead"
      style={{
        backgroundImage: `url(
        '${headerImageUrl}'
      )`
      }}
    >
      <div class="overlay"></div>
      <div class="container white-text">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1>{title}</h1>
              <span class="meta">{` Posted By: ${author} on ${datetime}`}</span>
              <p>{previewDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const PostArticle = props => {
  const { content } = props
  return (
    <article>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  )
}
class LongPost extends React.Component {
  state = {
    data: {},
    loading: true
  }

  componentDidMount() {
    let id = this.props.router.query.id
    const baseURL = 'http://localhost:5001' //process.env.REACT_APP_BACKEND_URL
    const apiPath = `${baseURL}/post/${id}`
    Axios.post(apiPath, {})
      .then(response => this.setState({ data: response.data, loading: false }))
      .catch(err => console.log(err))
  }

  render() {
    const {
      _id,
      title,
      author,
      datetime,
      details,
      categories
    } = this.state.data
    console.log(this.state.data)
    return (
      <div>
        <PostLanding {...this.state.data}></PostLanding>
        <PostArticle {...this.state.data}></PostArticle>
      </div>
    )
  }
}

export default withRouter(LongPost)
