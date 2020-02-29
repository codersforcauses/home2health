// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
          />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons|Lato:400,700&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/4cbc89a501.js"
            crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
