import Axios from 'axios'
import Router, { withRouter } from 'next/router'
import React from 'react'
import Loader from '../../components/Loader'
import { PostPreview } from '../../components/postPreview'
import { SearchBar } from '../../components/SearchBar'

class Posts extends React.Component {
  //INITIAL VALUE OF STATE BEFORE API CALL
  state = {
    posts: [],
    pages: 10,
    maxPage: 100,
    loaded: false,
    searchFilter: ''
  }

  componentDidMount() {
    //Forcing Asynchronous Order To Be Executed Last So Router Parameter is not Undefined
    setTimeout(
      () => this.updatePostsDisplay(this.props.router.query.pageNumber),
      0
    )
  }

  // UPDATE THE POST LISTING DISPLAY
  updatePostsDisplay(pageNumber) {
    this.setState({ loaded: false })
    const baseURL = process.env.API_BACKEND_URL || 'http://localhost:3000'
    const apiPath = `${baseURL}/post?page=${pageNumber}&searchFilter=${this.state.searchFilter}`
    Axios.get(apiPath, {})
      .then(response =>
        this.setState({
          currentCollection: pageNumber,
          posts: response.data.data,
          maxPage: response.data.maxPage,
          pages: response.data.numberOfPosts,
          loaded: true
        })
      )
      .catch(err => console.log(err))
  }

  // HANDLES THE CHANING OF PAGES
  changePageCollection = element => {
    Router.push(`/posts/[pageNumber]`, `/posts/${element.target.id}`)
    this.updatePostsDisplay(element.target.id)
  }

  //Creation of Pagination Display With maximum of 10 Page Display
  createPagination = currentCollection => {
    let list = []
    const paginationDisplayNo = this.state.pages
    let startPagination = currentCollection - paginationDisplayNo / 2
    startPagination = startPagination > 0 ? startPagination : 1 //Changes Pagination for when in middle

    let endPagination = startPagination + paginationDisplayNo - 1
    endPagination =
      endPagination < this.state.maxPage ? endPagination : this.state.maxPage

    for (let i = startPagination; i <= endPagination; i++) {
      list.push(
        <li
          key={i}
          className={currentCollection == i ? 'active' : 'waves-effect'}
        >
          <a id={i} onClick={element => this.changePageCollection(element)}>
            {i}
          </a>
        </li>
      )
    }

    return list
  }

  handleChangeSearch = value => {
    this.setState({ searchFilter: value })
  }
  handleSubmitSearch = () => {
    this.updatePostsDisplay(this.state.currentCollection)
  }

  render() {
    return (
      <div className="container">
        {/* POST PREVIEW LIST*/}
        <div>
          {this.state.loaded ? (
            <React.Fragment>
              <SearchBar
                handleChange={this.handleChangeSearch}
                handleSubmit={this.handleSubmitSearch}
                initialValue={this.state.searchFilter}
              ></SearchBar>
              {this.state.posts.map(post => (
                <PostPreview _id={post._id} key={post._id} {...post} />
              ))}
              {/* EVALUATION OF DISPLAY IF LISTING IS EMPTY */}
              {Object.keys(this.state.posts).length ? (
                <ul className="pagination center-align">
                  <li
                    className={
                      this.state.currentCollection == 1
                        ? 'disabled'
                        : 'waves-effect'
                    }
                  >
                    <a href="#!">
                      <i className="material-icons">chevron_left</i>
                    </a>
                  </li>
                  {this.createPagination(this.state.currentCollection)}
                  <li
                    className={
                      this.state.currentCollection === this.state.pages
                        ? 'disabled'
                        : 'waves-effect'
                    }
                  >
                    <a href="#!">
                      <i className="material-icons">chevron_right</i>
                    </a>
                  </li>
                </ul>
              ) : (
                <div>Your Search Results Did Not Match Any Documents</div>
              )}
            </React.Fragment>
          ) : (
            <Loader></Loader>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Posts)
