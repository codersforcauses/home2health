import React, { Component } from 'react'
import Link from 'next/link'
import Form from '../components/Form'
import { Consumer } from '../Context'
class Comment extends Component {
  state = { editValue: '', errors: [], textfieldOpen: false }
  change = event => {
    this.setState({ editValue: event.target.value })
  }
  componentDidMount() {
    this.setState(prevState => ({
      editValue: this.props.content
    }))
  }
  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.content}
          <br />
          {this.props.authorName}
          <br />
          {this.props.createdAt}{' '}
          {this.props.canEditOrDelete && (
            <React.Fragment>
              <span
                onClick={() => {
                  this.setState(prevState => ({
                    textfieldOpen: !prevState.textfieldOpen
                  }))
                }}
              >
                {this.state.textfieldOpen ? 'Cancel' : 'Edit'}
              </span>
              |<span onClick={this.props.deleteComment}>Delete</span>
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
      </React.Fragment>
    )
  }
}
export default Comment
