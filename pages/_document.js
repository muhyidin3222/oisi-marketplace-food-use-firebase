import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  componentDidMount() {
    window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', 'TRACKING_ID')
  }

  render() {
    return (
      <Html>
        <head>
          <title>oisi Food</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {/* <link rel="shortcut icon" href="../public/assets/img/logo/favicon.png" /> */}
          <link rel="shortcut icon" href="../public/favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=231196761"></script>

        </head>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument