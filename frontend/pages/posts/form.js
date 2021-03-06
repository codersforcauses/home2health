import React from 'react'
import SEO from '../../components/SEO'
import Router from 'next/router'
import '../../components/post-form.css'
import postCategoryConfig from '../../components/postCategoryConfig'
import AppContext, { Consumer } from '../../Context'
import Data from '../../Data'
class PostForm extends React.Component {
  static contextType = AppContext
  state = {
    form: {},
    isServer: true,
    UserID: 0,
    IsAllowedToPost: true,
    loading: false
  }

  componentDidMount() {
    const context = this.context
    const { pathname } = Router
    if (!context.authenticatedUser && typeof window !== 'undefined') {
      context.actions.redirectToSignIn(pathname)
    }
    // SSR doesn't fire ComponentDidMount, so we import CKEditor inside of it and store it as a component prop
    //(From : https://github.com/ckeditor/ckeditor5-react/issues/36)
    this.CKEditor = require('@ckeditor/ckeditor5-react')
    this.CustomBuild = require('@frinzekt/ckeditor5-build-classicinlinebase64')
    this.ClassicEditor = this.CustomBuild.ClassicEditor

    this.setState({ isServer: false }) // We just do this to toggle a re-render

    // MATERIALIZE INITIALIZE
    let elems = document.querySelectorAll('select')
    let instances = M.FormSelect.init(elems)

    elems = document.querySelectorAll('.chips')
    instances = M.Chips.init(elems, postCategoryConfig)
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

  submitHandler = e => {
    e.preventDefault()
    this.setState({loading: true})
    const baseURL = process.env.API_BACKEND_URL || 'http://localhost:5000'

    const apiPath = `${baseURL}/post`

    //Extract all values of the chips (categories)
    let categorySelector = document.querySelector('.chips')
    let instance = M.Chips.getInstance(categorySelector)
    let categories = instance.chipsData.map(chip => chip.tag)
    new Data()
      .createPost({ ...this.state.form, categories })
      .then(response => {
        M.toast({ html: 'Successfully Created Post', classes: 'rounded green' })

        let postId = response.data._id
        Router.push(`/post/[id]`, `/post/${postId}`)
      })
      .catch(err => {
        M.toast({ html: 'Oops, Something Went Wrong', classes: 'rounded red' })
        //(err)
      })
      .finally(() => this.setState({loading: false}))
  }

  render() {
    return (
      <React.Fragment>
        <SEO title={`Home2Health - Create a Post`}></SEO>
        <div className="card white darken-1 form">
          <div className="container" style={{ padding: 10 }}>
            <form className="col s12" onSubmit={this.submitHandler}>
              {/*Title*/}
              <div className="row">
                <div className="input-field col s6">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    data-length="10"
                    onChange={this.handleChange}
                    required
                  />
                  <label for="input_title">Title</label>
                </div>
                {/* Type */}
                <div className="input-field col s6">
                  <select name="type" onChange={this.handleChange} required>
                    <option value="Research">Research</option>
                    <option value="Article">Article</option>
                    <option value="Awareness">Awareness</option>
                  </select>
                  <label>Type of Post</label>
                </div>
                {/* Preview Detail */}
                <div className="input-field col s12">
                  <textarea
                    id="overview"
                    name="overview"
                    className="materialize-textarea"
                    onChange={this.handleChange}
                    required
                  ></textarea>
                  <label className="active" for="overview">
                    Preview Detail
                  </label>
                </div>
                {/*File Attachment*/}
                <div className="input-field col s12">
                  <textarea
                    id="headerImageUrl"
                    name="headerImageUrl"
                    className="materialize-textarea"
                    onChange={this.handleChange}
                    required
                  ></textarea>
                  <label className="active" for="overview">
                    Header Image Path (Optional)
                  </label>
                </div>
                {/*Content*/}
                <div className="input-field col s12">
                  <label for="content">Content</label>
                  {this.CKEditor && (
                    <this.CKEditor
                      name="content"
                      editor={this.ClassicEditor}
                      placeholder="a"
                      data=""
                      onChange={(event, editor) =>
                        this.directHandleChange('content', editor.getData())
                      }
                      onBlur={(event, editor) => {}}
                      onFocus={(event, editor) => {}}
                    />
                  )}
                </div>
              </div>
              {/*Categories Input*/}
              <div className="chips chips-autocomplete ">
                <input
                  className="input"
                  id="inputChip"
                  placeholder="Category"
                  name="categories"
                />
              </div>
              {/*Functional buttons*/}
              <div className="form-btns">
                <button
                  className="btn waves-effect waves-light form-btn"
                  onClick={PostForm.showForm}
                >
                  Cancel
                  <i className="material-icons left">close</i>
                </button>

                <button
                  className="btn waves-effect waves-light form-btn"
                  type="submit"
                  name="submit"
                  onClick={this.submitHandler}
                  disabled={this.state.loading}
                >
                  Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PostForm
