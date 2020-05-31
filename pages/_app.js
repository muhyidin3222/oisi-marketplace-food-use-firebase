import React from "react"
import App from "next/app"

import '../public/css/style.css'
import "../public/css/bootstrap.min.css"
// import "../public/css/owl.carousel.min.css"
// import "../public/css/flaticon.css"
// import "../public/css/slicknav.css"
// import "../public/css/animate.min.css"
// import "../public/css/magnific-popup.css"
// import "../public/css/fontawesome-all.min.css"
import "../public/css/themify-icons.css"
// import "../public/css/slick.css"
// import "../public/css/nice-select.css"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Component {...pageProps} />
    )
  }

}

export default MyApp