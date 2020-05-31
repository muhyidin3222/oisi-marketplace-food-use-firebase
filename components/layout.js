import React, { useEffect, useState } from 'react'
// import firebase from 'firebase/app'
import Link from 'next/link';

// import firebaseConfig from './config/firebase';
import { initGA, logPageView } from '../utils/analytics'

const headerData = [
  {
    href: "/",
    title: "Home"
  }, {
    href: "/catagori",
    title: "Produk"
  },
  {
    href: "/about",
    title: "About"
  },
  {
    href: "/contact",
    title: "Kontak"
  }
]

export default function layout({ children }) {
  const [current, setcurrent] = useState('mail')
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    return () => {
    }
  }, [])
 
  return (
    <layout className="layout">
      <header>
        <div className="header-area">
          <div className="main-header ">
            <div className="header-bottom  header-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1" style={{ padding: 0 }}>
                    <Link href="/about">
                      <a>
                        <img src={'/img/home/logo.png'} style={{ height: 80, width: 80 }} />
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-5 col-lg-7 col-md-7 col-sm-11">
                    <div className="main-menu f-right d-lg-block">
                        <ul id="navigation">
                          {
                            headerData.map((value, index) => (
                              <li key={index}>
                                <Link href={value.href}>
                                  <a>{value.title}</a>
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 fix-card">
                    <ul className="header-right f-right d-lg-block d-flex justify-content-between">
                      <li className="d-xl-block">
                        <a className="kontak" href="https://wa.me/085755830844" target="_blank">+ 6285755830844 </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        {children}
      </div>

      <footer style={{ textAlign: 'center' }}>
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul>
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>About</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">
                          <a>Kontak</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/catagori">
                          <a>Produk</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-7">
                <div className="footer-copy-right">
                  <p>
                    Copyright
                                        All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="footer-copy-right f-right">
                  <div className="footer-social">
                    <Link href="/">
                      <a><i className="fab fa-twitter"></i></a>
                    </Link>
                    <Link href="/">
                      <a><i className="fab fa-facebook-f"></i></a>
                    </Link>
                    <Link href="/">
                      <a><i className="fab fa-behance"></i></a>
                    </Link>
                    <Link href="/">
                      <a><i className="fas fa-globe"></i></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </layout>
  )
}
