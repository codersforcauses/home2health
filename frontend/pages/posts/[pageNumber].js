import React from 'react'
import Axios from 'axios'
import { Post, PostPreview } from '../../components/postPreview'

import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'

class Posts extends React.Component {
  //INITIAL VALUE OF STATE BEFORE API CALL
  state = {
    posts: [],
    pages: 10,
    maxPage: 100,
    currentCollection: this.props.router.query.pageNumber
  }

  componentDidMount() {
    this.updatePostsDisplay()
  }

  // UPDATE THE POST LISTING DISPLAY
  updatePostsDisplay() {
    const baseURL = process.env.API_BACKEND_URL
    const apiPath = `${baseURL}/post/${this.state.currentCollection}`
    Axios.get(apiPath, {})
      .then(response =>
        this.setState({
          posts: response.data.data,
          maxPage: response.data.maxPage,
          pages: response.data.numberOfPosts
        })
      )
      .catch(err => console.log(err))
  }

  // HANDLES THE CHANING OF PAGES
  changePageCollection = element => {
    this.setState({ currentCollection: element.target.id }, () => {
      this.updatePostsDisplay()
    })
  }

  //Creation of Pagination Display With maximum of 10 Page Display
  createPagination = () => {
    let list = []
    const paginationDisplayNo = this.state.pages
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
      <div className="container">
        {/* POST PREVIEW LIST*/}
        <div>
          {this.state.posts.map(post => {
            return (
              <React.Fragment>
                <PostPreview _id={post._id} key={post._id} {...post} />
              </React.Fragment>
            )
          })}
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
