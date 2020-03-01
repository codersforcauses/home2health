import React from 'react'
import Form from './Form'
import AppContext from '../Context'
// POST CONTENT COMPONENT

export class Comments extends React.Component {
  static contextType = AppContext
  state = {
    comment: '',
    errors: [],
    comments: this.props.comments,
    authenticatedUser: this.props.authenticatedUser
  }
  static getDerivedStateFromProps({ comments, authenticatedUser }) {
    return { comments, authenticatedUser }
  }

  componentDidMount() {
    let elems = document.querySelectorAll('.fixed-action-btn')
    let instances = M.FloatingActionButton.init(elems, { direction: 'left' })
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
  render() {
    const { comment } = this.state
    return (
      <React.Fragment>
        <div className="container">
          <h4>Comments</h4>
          {this.state.authenticatedUser ? (
            <Form
              submit={() => this.props.createComment(comment)}
              submitButtonText="Create comment"
              errors={this.state.errors}
              elements={() => (
                <React.Fragment>
                  <div className="input-field col s12">
                    <textarea
                      id="comment"
                      name="comment"
                      type="text"
                      value={comment}
                      onChange={this.change}
                      placeholder="Add a comment here"
                      style={{
                        width: '100%',
                        resize: 'vertical',
                        minHeight: '150px',
                        padding: 15
                      }}
                    />
                  </div>
                </React.Fragment>
              )}
            />
          ) : (
            <div className="">
              <p>
                <b>Please sign in</b>
              </p>
              <Link href="/login">
                <a className="btn">Login</a>
              </Link>
            </div>
          )}
          <br />
          {this.state.comments.map(comment => {
            const date = new Date(comment.createdAt)

            return (
              <React.Fragment>
                <div className="card" key={comment._id}>
                  <div
                    className="card-content grey lighten-4"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div className="">
                      <span style={{ marginRight: 10 }}>
                        <b>{comment.authorName}</b>
                      </span>
                      {date.toDateString()}
                    </div>
                    <div
                      className="fixed-action-btn horizontal"
                      style={{ position: 'static' }}
                    >
                      <a className="btn-floating waves-effect waves-light ">
                        <i className="large material-icons">more_vert</i>
                      </a>
                      <ul style={{ marginTop: 15 }}>
                        <li>
                          <a className="btn-floating green">
                            <i className="material-icons">mode_edit</i>
                          </a>
                        </li>
                        <li>
                          <a className="btn-floating yellow darken-1">
                            <i className="material-icons">info</i>
                          </a>
                        </li>
                        <li>
                          <a className="btn-floating red">
                            <i className="material-icons">delete</i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-content">{comment.content}</div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </React.Fragment>
    )
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
