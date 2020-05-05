import '../public/assets/css/style.css'
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/owl.carousel.min.css"
import "../public/assets/css/flaticon.css"
import "../public/assets/css/slicknav.css"
import "../public/assets/css/animate.min.css"
import "../public/assets/css/magnific-popup.css"
import "../public/assets/css/fontawesome-all.min.css"
import "../public/assets/css/themify-icons.css"
import "../public/assets/css/slick.css"
import "../public/assets/css/nice-select.css"


// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'

// Router.events.on('routeChangeStart', url => {
//   console.log(`Loading: ${url}`)
//   NProgress.start()
// })

// Router.events.on('routeChangeComplete', () => {
//   console.log(`Done: `)
//   NProgress.done()
// })
// Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <nav>
        <style jsx>{`
          a {
            margin: 0 10px 0 0;
          }
        `}</style>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/forever">
          <a>Forever</a>
        </Link>
        <a href="/non-existing">Non Existing Page</a>
      </nav> */}
      <Component {...pageProps} />
    </>
  )
}