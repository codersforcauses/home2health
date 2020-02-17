import React from 'react'
import Axios from 'axios'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Form from '../../components/Form'
import { useRouter, withRouter } from 'next/router'

import './post.css'
import Loader from '../../components/Loader'
import postCategoryConfig from '../../components/postCategoryConfig'
import PostModalSetting from '../../components/PostModalSetting'
import AppContext, { Consumer } from '../../Context'

const config = {
  toolbar: ['undo', 'redo'],
  autoParagraph: false
}

//REGEX HTML STRIPPER FOR TITLE AND OVERVIEW EDIT
const stripHTML = string => string.replace(/<[^>]*>?/gm, '')

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
                    props.directHandleChange(
                      'title',
                      stripHTML(editor.getData())
                    )
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
                    props.directHandleChange(
                      'overview',
                      stripHTML(editor.getData())
                    )
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
  const { content, CKEditor, InlineEditor, ClassicEditor } = props
  return (
    <article>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto">
            <CKEditor
              name="content"
              editor={ClassicEditor}
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
              {author ? (
                <span className="meta">{` Posted By: ${
                  author.name
                } on ${date.toDateString()}`}</span>
              ) : (
                <span className="meta">
                  {` Posted By: [deleted author] on ${date.toDateString()}`}
                </span>
              )}
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

// POST CONTENT COMPONENT
class Comments extends React.Component {
  static contextType = AppContext
  state = {
    comment: '',
    errors: []
  }

  componentDidMount() {
    const context = this.context

  }
  formValid = ({ formErrors, ...rest }) => {
    let valid = true

    // validate form errors being empty
    // if val.length > 0 THEN EXECUTE valid=false
    //THIS PART COULD BE IMPLEMENTED IN THE PHASE OF THE HANDLECHANGE BY USING MULTIPLE LOGICAL STATEMENTS
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false)
    })

    // validate the form was filled out
    //THIS IS NOT ALWAYS NEEDED
    Object.values(rest).forEach(val => {
      val === null && (valid = false)
    })

    return valid
  }

  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    let formErrors = this.state.formErrors

    switch (name) {
      default:
        break
    }
    this.setState(prevState => ({
      formErrors,
      form: { ...prevState.form, [name]: value }
    }))
  }

  directHandleChange = (name, value) => {
    this.setState(prevState => ({ form: { ...prevState.form, [name]: value } }))
  }

  

  render() {
    const { comment } = this.state
    let submitHandler = () => {
      this.context.actions
        .createComment({ content: comment, author: this.props.author, post: this.props.post })
        .then(response => {
          M.toast({ html: 'Successfully Created Comment', classes: 'rounded green' })
          this.context.data.comments.push(response.data)
          console.log(this.context)
        })
        .catch(err => {
          M.toast({ html: 'Oops, Something Went Wrong', classes: 'rounded red' })
          console.log(err);
          //(err)
        })
    }
    return (
      <React.Fragment><Form
      submit={submitHandler}
      submitButtonText="Create comment"
      errors={this.state.errors}
      elements={() => (
        <React.Fragment>
        <textarea
                  id="comment"
                  name="comment"
                  type="text"
                  value={comment}
                  onChange={this.change}
                  placeholder="Comment"
                  cancel={this.cancel}
                />
      </React.Fragment>
      )}
    /> {this.context.data.comments.map(comment => <div>{comment.content}</div>)}</React.Fragment>
      
      
    )
  }
  cancel = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState(() => {
      return {
        [name]: ""
      }
    })
  }
  change = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState(() => {
      return {
        [name]: value
      }
    })
  }
}

//STATEFUL OBJECT FOR A POST
class LongPost extends React.Component {
  state = {
    data: {},
    loaded: false,
    isEditorLoaded: false,
    user: 'Author1',
    id: 1
  }
  static contextType = AppContext
  componentDidMount() {
    // SSR doesn't fire ComponentDidMount, so we import CKEditor inside of it and store it as a component prop
    //(From : https://github.com/ckeditor/ckeditor5-react/issues/36)
    this.CKEditor = require('@ckeditor/ckeditor5-react')
    this.CustomBuild = require('@frinzekt/ckeditor5-build-classicinlinebase64')
    this.InlineEditor = this.CustomBuild.InlineEditor
    this.ClassicEditor = this.CustomBuild.ClassicEditor
    this.setState({authenticatedUser: this.context.authenticatedUser});
    //Forcing Asynchronous Order To Be Executed Last So Router Parameter is not Undefined
    setTimeout(() => this.initialLoad(), 0)
  }
  // componentDidUpdate() {
  //   this.initialLoad()
  // }

  initialLoad = () => {
    const id = this.props.router.query.id

    //INITIAL DATA LOAD
    const baseURL = process.env.API_BACKEND_URL || 'http://localhost:5000'
    const apiPath = `${baseURL}/post/${id}`

    Axios.get(apiPath, {})
      .then(response => {
        this.setState({
          data: response.data,
          id,
          loaded: true
        })
      })
      .catch(err => {
        M.toast({
          html: 'Oops, Something Went Wrong',
          classes: 'rounded red'
        })
        console.log(err)
      })
  }

  // General Updater to Server
  sendUpdateToServer = payload => {
    let id = this.state.id

    const baseURL = process.env.API_BACKEND_URL || 'http://localhost:3000'
    const apiPath = `${baseURL}/post/${id}`

    //SEND THE NEW CHANGE TO BACKEND
    Axios.patch(apiPath, payload)
      .then(response =>
        M.toast({
          html: 'Successfully Editted',
          classes: 'rounded green'
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
    //PACKAGE THE NEW CHANGE
    let payload = {
      [name]: value
    }

    //Send Request To Server
    this.sendUpdateToServer(payload)
  }

  updateCategories = chipsObject => {
    let categories = chipsObject.chipsData.map(chip => chip.tag)
    let payload = {
      categories
    }
    this.sendUpdateToServer(payload)
  }
  directHandleChange = (name, value) => {
    let strippedValue = value
    strippedValue.replace(/<[^>]*>?/gm, '')
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
    let author;
    let userId;
    if (this.state.data.author) {
      author = this.state.data.author._id
    }
    if (this.state.authenticatedUser) {
      userId = this.state.authenticatedUser._id
    }
    this.context.data = this.state.data;
    return this.state.loaded ? (
      <div>
        {userId === author && this.state.isEditorLoaded ? ( //EDITTABLE VERSION
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
              ClassicEditor={this.ClassicEditor}
            ></PostArticleEdittable>
            <div>{state}</div>
          </React.Fragment>
        ) : (
          //VIEW-ONLY VERSION
          <React.Fragment>
            <PostLanding {...this.state.data}></PostLanding>
            <PostArticle {...this.state.data}></PostArticle>
          </React.Fragment>
        )}
        {this.state.authenticatedUser ? <Comments author={this.state.authenticatedUser._id} post={this.state.data._id} data={this.state.data}></Comments>:<div>Sign in please</div>}
        <PostModalSetting
          postId={this.state.id}
          categories={this.state.data.categories}
          onChangeHandler={this.updateCategories}
        ></PostModalSetting>
      </div>
    ) : (
      <Loader></Loader>
    )
  }
}

export default withRouter(LongPost)

// if (typeof window !== 'undefined') {
//   import
// }
