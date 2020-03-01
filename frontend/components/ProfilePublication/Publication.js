import React, { Component } from 'react'

class Publication extends Component {
  render() {
    return (
      <div>
        <a
          href={this.props.data.link}
          style={{
            fontSize: 17,
            textDecorationLine: 'underline',
            display: 'inline-block',
            marginTop: '0.5em'
          }}
        >
          {this.props.data.title}
        </a>
        <p style={{ display: 'block', marginBlockStart: '0em' }}>
          {this.props.data.desc}
        </p>
      </div>
    )
  }
}

export default Publication
