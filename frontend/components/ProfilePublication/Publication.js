import React, { Component } from 'react'

class Publication extends Component {
  render() {
    return (
      <>
        {/* {style} */}
        <a
          href="{this.props.data.link}"
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
        {/* [
        {
          publicationName: '1st publication',
          description: 'about the publication one'
        },

        {
          publicationName: '2nd publication',
          description: 'about the publication two'
        }
      ] */}
      </>
    )
  }
}

// const style = (
//   <style jsx="true">{`
//     .publication {
//       font-size: 30px;
//     }
//   `}</style>
// )

export default Publication
