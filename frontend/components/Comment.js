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
    this.setState((prevState) => ({
      editValue: this.props.content,
    }))
  }
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-content">
            <div>{this.props.content}</div>
            <br />
            <span style={{ marginRight: 10 }}>
              <b>{this.props.authorName}</b>
            </span>
            {new Date(this.props.createdAt).toDateString()}{' '}
            {this.props.canEditOrDelete && (
              <React.Fragment>
                <button
                  className="btn-small"
                  style={{ marginRight: '1rem' }}
                  onClick={() => {
                    this.setState((prevState) => ({
                      textfieldOpen: !prevState.textfieldOpen,
                    }))
                  }}
                >
                  {this.state.textfieldOpen ? 'Cancel' : 'Edit'}
                </button>
                <button
                  className="btn-small"
                  onClick={this.props.deleteComment}
                >
                  Delete
                </button>
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
            <br />
            <br />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Comment
