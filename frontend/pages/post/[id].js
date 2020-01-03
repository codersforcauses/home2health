import React from 'react'
import Axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Router, { useRouter, withRouter } from 'next/router'

import './post.css'
import Loader from '../../components/Loader'

const config = {
  toolbar: ['undo', 'redo'],
  autoParagraph: false
}
const DeleteConfirmation = ({ postId }) => {
  const deletePost = _id => {
    const baseURL = process.env.API_BACKEND_URL
    const apiPath = `${baseURL}/post/${_id}`
    console.log(apiPath)
    Axios.delete(apiPath, {})
      .then(response => {
        M.toast({
          html: 'Successfully Deleted',
          classes: 'rounded green'
        })
        Router.push(`/posts/1`)
      })
      .catch(err => {
        M.toast({
          html: 'Oops, Something Went Wrong',
          classes: 'rounded red'
        })
        console.log(err)
      })
  }
  return (
    // <!-- Modal Structure -->
    <div id="confirmationModal" class="modal">
      <div class="modal-content">
        <h4>Are you sure?</h4>
        <p>This will delete the entire post</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">
          No
        </a>
        <a
          class="modal-close waves-effect waves-red btn-flat"
          onClick={e => deletePost(postId)}
        >
          Yes
        </a>
      </div>
    </div>
  )
}
const ModalSetting = postId => {
  return (
    <div id="settingsModal" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Post Other Settings</h4>
        <ul class="collection">
          <li class="collection-item avatar">
            <i class="material-icons circle">folder</i>
            <span class="title">Title</span>
            <p>
              First Line
              <br /> Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle green">assessment</i>
            <span class="title">Category Tags</span>
            <p>
              First Line
              <br /> Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </li>
          <li class="collection-item avatar">
            <i class="material-icons circle red">delete</i>
            <a class="modal-trigger" href="#confirmationModal">
              <span class="title">Delete</span>
            </a>
            <DeleteConfirmation {...postId}></DeleteConfirmation>
          </li>
        </ul>
      </div>
    </div>
  )
}
//EDITTABLE VERSION OF POST LANDING COMPONENT
const PostLandingEdittable = props => {
  const {
    title,
    author,
    datetime,
    overview,
    headerImageUrl,
    CKEditor,
    InlineEditor
  } = props

  let date = new Date(datetime)
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url(
        '${headerImageUrl}'
      )`
      }}
    >
      <div className=""></div>

      <div className="container white-text">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="post-heading">
              {/* EDIT SETTINGS */}
              <a
                class="waves-effect waves-light btn modal-trigger right"
                href="#settingsModal"
                onClick={e => {
                  let elems = document.querySelectorAll('.modal')
                  let instances = M.Modal.init(elems)
                  instances[0].open()
                }}
              >
                <i class="material-icons">settings</i>
              </a>
              {/* EDITTABLE POST TITLE */}
              <h1>
                <CKEditor
                  name="title"
                  editor={InlineEditor}
                  placeholder="a"
                  data={title}
                  config={config}
                  onBlur={(event, editor) => {
                    props.directHandleChange('title', editor.getData())
                  }}
                />
              </h1>
              <span className="meta">{` Posted By: ${author} on ${date.toDateString()}`}</span>
              <p>
                <CKEditor
                  name="overview"
                  editor={InlineEditor}
                  placeholder="a"
                  data={overview}
                  config={config}
                  onBlur={(event, editor) => {
                    props.directHandleChange('overview', editor.getData())
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
//EDITTABLE VERSION OF POST ARTICLE COMPONENT
const PostArticleEdittable = props => {
  const { content, CKEditor, InlineEditor } = props
  return (
    <article>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <CKEditor
              name="content"
              editor={InlineEditor}
              placeholder="a"
              data={content}
              onBlur={(event, editor) => {
                props.directHandleChange('content', editor.getData())
              }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

//POST HEADING COMPONENT
const PostLanding = props => {
  const { title, author, datetime, overview, headerImageUrl } = props
  let date = new Date(datetime)

  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url(
        '${headerImageUrl}'
      )`
      }}
    >
      <div className="overlay"></div>
      <div className="container white-text">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <div className="post-heading">
              <h1>
                <ReactMarkdown
                  source={title}
                  escapeHtml={false}
                ></ReactMarkdown>
              </h1>
              <span className="meta">{` Posted By: ${author} on ${date.toDateString()}`}</span>
              <p>
                <ReactMarkdown
                  source={overview}
                  escapeHtml={false}
                ></ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// POST CONTENT COMPONENT
const PostArticle = props => {
  const { content } = props
  return (
    <article>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  )
}

//STATEFUL OBJECT FOR A POST
class LongPost extends React.Component {
  state = {
    data: {},
    loaded: false,
    isEditorLoaded: false,
    user: 'Author1',
    id: this.props.router.query.id
  }

  componentDidMount() {
    // SSR doesn't fire ComponentDidMount, so we import CKEditor inside of it and store it as a component prop
    //(From : https://github.com/ckeditor/ckeditor5-react/issues/36)
    this.CKEditor = require('@ckeditor/ckeditor5-react')
    this.InlineEditor = require('@ckeditor/ckeditor5-build-inline')

    this.setState({
      isEditorLoaded: true
    }) // We just do this to toggle a re-render

    //INITIAL DATA LOAD
    const baseURL = process.env.API_BACKEND_URL
    const apiPath = `${baseURL}/post/${this.state.id}`
    Axios.get(apiPath, {})
      .then(response =>
        this.setState({
          data: response.data,
          loaded: true
        })
      )
      .catch(err => {
        M.toast({
          html: 'Oops, Something Went Wrong',
          classes: 'rounded red'
        })
        console.log(err)
      })
  }

  updatePost = (name, value) => {
    let id = this.state.id
    const baseURL = process.env.API_BACKEND_URL
    const apiPath = `${baseURL}/post/${id}`

    //PACKAGE THE NEW CHANGE
    let payload = {
      [name]: value
    }

    //SEND THE NEW CHANGE TO BACKEND
    Axios.patch(apiPath, payload)
      .then(response =>
        M.toast({ html: 'Successfully Editted', classes: 'rounded green' })
      )
      .catch(err => {
        M.toast({ html: 'Oops, Something Went Wrong', classes: 'rounded red' })
        console.log(err)
      })
  }
  directHandleChange = (name, value) => {
    if (this.state.data[name] !== value) {
      //SEND API ONLY IF THE CHANGE IS DIFFERENT
      // UPDATE STATE AND DATABASE
      this.setState(prevState => ({
        data: { ...prevState.data, [name]: value }
      }))
      this.updatePost(name, value)
    }
  }

  render() {
    const { author } = this.state.data
    return this.state.loaded ? (
      <div>
        {this.state.user === author && this.state.isEditorLoaded ? ( //EDITTABLE VERSION
          <React.Fragment>
            <PostLandingEdittable
              {...this.state.data}
              CKEditor={this.CKEditor}
              InlineEditor={this.InlineEditor}
              directHandleChange={this.directHandleChange}
            ></PostLandingEdittable>
            <PostArticleEdittable
              {...this.state.data}
              CKEditor={this.CKEditor}
              InlineEditor={this.InlineEditor}
              directHandleChange={this.directHandleChange}
            ></PostArticleEdittable>
          </React.Fragment>
        ) : (
          //VIEW-ONLY VERSION
          <React.Fragment>
            <PostLanding {...this.state.data}></PostLanding>
            <PostArticle {...this.state.data}></PostArticle>
          </React.Fragment>
        )}
        <ModalSetting postId={this.state.id}></ModalSetting>
      </div>
    ) : (
      <Loader></Loader>
    )
  }
}

export default withRouter(LongPost)
