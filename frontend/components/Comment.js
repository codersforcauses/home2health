import React, { Component } from 'react'
import Link from 'next/link'
import Form from '../components/Form'
import { Consumer } from '../Context'
class Comment extends Component {
  state = { editValue: '', errors: [], textfieldOpen: false }
  change = (event) => {
    this.setState({ editValue: event.target.value })
  }
  componentDidMount() {
    let elems = document.querySelectorAll('.fixed-action-btn')
    let instances = M.FloatingActionButton.init(elems, { direction: 'left' })
    this.setState((prevState) => ({
      editValue: this.props.content,
    }))
  }
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="card">
          <div
            className="card-content grey lighten-4"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div className="">
              <span style={{ marginRight: 10 }}>
                <b>{this.props.authorName}</b>
              </span>
              {new Date(this.props.createdAt).toDateString()}{' '}
            </div>
            <div
              className="fixed-action-btn horizontal"
              style={{ position: 'static' }}
            >
              {this.props.canEditOrDelete && (
                <React.Fragment>
                  <a className="btn-floating waves-effect waves-light ">
                    <i className="large material-icons">more_vert</i>
                  </a>
                  <ul style={{ marginTop: 15 }}>
                    <li>
                      <a
                        className="btn-floating green"
                        onClick={() => {
                          this.setState((prevState) => ({
                            textfieldOpen: !prevState.textfieldOpen,
                          }))
                        }}
                      >
                        <i className="material-icons">mode_edit</i>
                      </a>
                    </li>
                    {/* <li>
                    <a className="btn-floating yellow darken-1">
                      <i className="material-icons">info</i>
                    </a>
                  </li> */}
                    <li>
                      <a
                        className="btn-floating red"
                        onClick={this.props.deleteComment}
                      >
                        <i className="material-icons">delete</i>
                      </a>
                    </li>
                  </ul>
                </React.Fragment>
              )}
            </div>
          </div>
          <div className="card-content">
            <div>{this.props.content}</div>
            <br />
            {this.props.canEditOrDelete && (
              <React.Fragment>
                {this.state.textfieldOpen && (
                  <Form
                    submit={async () => {
                      await this.props.editComment(this.state.editValue)
                      this.setState({ textfieldOpen: false })
                    }}
                    submitButtonText="Edit comment"
                    errors={this.state.errors}
                    elements={() => (
                      <React.Fragment>
                        <textarea
                          id="comment"
                          name="comment"
                          type="text"
                          value={this.state.editValue}
                          onChange={this.change}
                          placeholder="Comment"
                        />
                      </React.Fragment>
                    )}
                  />
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Comment
