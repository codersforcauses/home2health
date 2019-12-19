import React from 'react'
import Axios from 'axios'
import { Post } from '../../components/post'

import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
/*
[page].js shows the specific page cycle of posts.

The ideal POST REQUEST OF THIS PAGE IS
{
  pageNo: -- (int)
}

The ideal POST RESPONSE OF THIS PAGE IS
{
  _id:--, (int)
  {
    title:--, (string)
    author: --, (string)
    date: --, (string - date)
    details: -- (string - preview details with x maximum characters/words/sentences),
    categories: [], (array of strings)
    img-link: -- (string - link) - later on can be used to have a side picture of the post
  }
  ... more items for post (n number of post... not yet decided)
}

*/

class Posts extends React.Component {
  state = {
    posts: [],
    pages: 10,
    maxPage: 100,
    currentCollection: this.props.router.query.pageNumber
  }

  componentDidMount() {
    this.updatePostsDisplay()
  }
  updatePostsDisplay() {
    const baseURL = 'http://localhost:5001' //process.env.REACT_APP_BACKEND_URL
    const apiPath = `${baseURL}/post/${this.state.currentCollection}`
    Axios.get(apiPath, {})
      .then(response =>
        this.setState({
          posts: response.data.data,
          maxPage: response.data.maxPage
        })
      )
      .catch(err => console.log(err))
  }
  changePageCollection = element => {
    this.setState({ currentCollection: element.target.id }, () =>
      this.updatePostsDisplay()
    )
  }

  //Creation of Pagination Display With maximum of 10 Page Display
  createPagination = () => {
    let list = []
    const paginationDisplayNo = 10
    let startPagination = this.state.currentCollection - paginationDisplayNo / 2
    startPagination = startPagination > 0 ? startPagination : 1 //Changes Pagination for when in middle

    let endPagination = startPagination + paginationDisplayNo - 1
    endPagination =
      endPagination < this.state.maxPage ? endPagination : this.state.maxPage

    for (let i = startPagination; i <= endPagination; i++) {
      list.push(
        <li
          key={i}
          className={
            this.state.currentCollection == i ? 'active' : 'waves-effect'
          }
        >
          <a id={i} onClick={element => this.changePageCollection(element)}>
            {i}
          </a>
        </li>
      )
      // console.log(this.state.currentCollection + " " + i + " "+ this.state.pages);
    }

    return list
  }

  render() {
    return (
      <div>
        {/* POST PREVIEW LIST*/}
        <div styles="margin:auto">
          {this.state.posts.map(post => (
            <Post
              _id={post._id}
              key={post._id}
              title={post.title}
              author={post.author}
              date={post.date}
              details={post.details}
              categories={post.categories}
            />
          ))}
        </div>

        {/* PAGINATION */}

        <ul className="pagination center-align">
          <li
            className={
              this.state.CurrentCollection == 1 ? 'disabled' : 'waves-effect'
            }
          >
            <a href="#!">
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          {this.createPagination()}
          <li
            className={
              this.state.CurrentCollection == this.state.pages
                ? 'disabled'
                : 'waves-effect'
            }
          >
            <a href="#!">
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Posts)
