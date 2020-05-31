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

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}