import React from 'react'
import '../../components/post-form.css'

const Form = () => {
  return (
    <div className="card white darken-1 form">
      <div className="row">
        <form className="col s12" onSubmit={submitHandler}>
          {/*Title*/}
          <div className="row">
            <div className="input-field col s6">
              <input id="input_text" type="text" data-length="10" />
              <label for="input_text">Title</label>
            </div>
            {/*Content*/}
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea" />
              <label for="textarea1">Content</label>
            </div>
          </div>
          {/*File Attachment*/}
          <div className="file-field input-field">
            <div className="btn">
              <i className="material-icons left">attach_file</i>
              <span>File</span>
              <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload one or more files"
              />
            </div>
          </div>
          {/*Categories Input*/}
          <div className="chips chips-autocomplete input-field">
            <input className="input" />
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
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const submitHandler = e => {
  e.preventDefault()
}

class PostForm extends React.Component {
  state = {
    UserID: 0,
    IsAllowedToPost: true,
    CreateForm: false
  }

  showForm = () => {
    this.setState(prevState => ({
      CreateForm: !prevState.CreateForm
    }))
  }

  render() {
    return (
      <div>
        {this.state.IsAllowedToPost ? (
          <div>
            {this.state.CreateForm ? <Form /> : ''}
            <a className="waves-effect waves-light btn" onClick={this.showForm}>
              Create a post
            </a>
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default PostForm
