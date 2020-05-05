import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <head>
          <title>oisi Food</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/img/favicon.png" />
          {/* <script src="../compoents"></script> */}

          {/* <script src="../public/assets/js/vendor/modernizr-3.5.0.min.js"></script>
          <script src="../public/assets/js/vendor/jquery-1.12.4.min.js"></script>
          <script src="../public/assets/js/popper.min.js"></script>
          <script src="../public/assets/js/bootstrap.min.js"></script>
          <script src="../public/assets/js/jquery.slicknav.min.js"></script>
          <script src="../public/assets/js/owl.carousel.min.js"></script>
          <script src="../public/assets/js/slick.min.js"></script>
          <script src="../public/assets/js/wow.min.js"></script>
          <script src="../public/assets/js/animated.headline.js"></script>
          <script src="../public/assets/js/jquery.magnific-popup.js"></script>
          <script src="../public/assets/js/jquery.scrollUp.min.js"></script>
          <script src="../public/assets/js/jquery.nice-select.min.js"></script>
          <script src="../public/assets/js/jquery.sticky.js"></script>
          <script src="../public/assets/js/contact.js"></script>
          <script src="../public/assets/js/jquery.form.js"></script>
          <script src="../public/assets/js/jquery.validate.min.js"></script>
          <script src="../public/assets/js/mail-script.js"></script>
          <script src="../public/assets/js/jquery.ajaxchimp.min.js"></script>
          <script src="../public/assets/js/plugins.js"></script>
          <script src="../public/assets/js/main.js"></script> */}

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