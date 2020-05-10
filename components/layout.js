import React from 'react'
import Link from 'next/link';

export default function layout({ children }) {
    return (
        <div>
            <header>
                <div className="header-area">
                    <div className="main-header ">
                        {/* <div className="header-top top-bg d-none d-lg-block">
                            <div className="container-fluid">
                                <div className="col-xl-12">
                                    <div className="row d-flex justify-content-between align-items-center">
                                        <div className="header-info-left d-flex">
                                            <div className="flag">
                                                <img src="/assets/img/icon/header_icon.png" />
                                            </div>
                                            <div className="select-this">
                                                <form action="#">
                                                    <div className="select-itms">
                                                        <select name="select" id="select1">
                                                            <option value="">USA</option>
                                                            <option value="">SPN</option>
                                                            <option value="">CDA</option>
                                                            <option value="">USD</option>
                                                        </select>
                                                    </div>
                                                </form>
                                            </div>
                                            <ul className="contact-now">
                                                <li>+777 2345 7886</li>
                                            </ul>
                                        </div>
                                        <div className="header-info-right">
                                            <ul>
                                                <li>
                                                    <Link href="/login"><a>My Account </a></Link>
                                                </li>
                                                <li><a href="product_list.html">Wish List  </a></li>
                                                <li><a href="cart.html">Shopping</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3" style={{ padding: 0 }}>
                                        <Link href="/about">
                                            <a>
                                                <h3 className="text-logo">oisi food .</h3>
                                                {/* <img src="/assets/img/logo/logo.png" alt="" /> */}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="col-xl-5 col-lg-7 col-md-6 col-sm-5">
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li>
                                                        <Link href="/">
                                                            <a>Home</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/catagori">
                                                            <a>Produk</a>
                                                        </Link>
                                                    </li>
                                                    {/* className="hot" */}
                                                    {/* <li >
                                                        <Link href="/">
                                                            <a>Latest</a>
                                                        </Link>
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link href="/product_list">
                                                                    <a> Product list</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/singel_product">
                                                                    <a> Product Details</a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li> */}
                                                    <li>
                                                        <Link href="/blog">
                                                            <a>Blog</a>
                                                        </Link>
                                                        {/* <ul className="submenu">
                                                            <li>
                                                                <Link href="/blog">
                                                                    <a>Blog</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/single_blog">
                                                                    <a>Blog Details</a>
                                                                </Link>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li>
                                                        <Link href="/about">
                                                            <a>About</a>
                                                        </Link>
                                                    {/* <ul className="submenu">
                                                            <li>
                                                                <Link href="/login">
                                                                    <a>Login</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/cart">
                                                                    <a>Card</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/elements">
                                                                    <a>Element</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/about">
                                                                    <a>About</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/confirmation">
                                                                    <a>Confirmation</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/cart">
                                                                    <a>Shopping Cart</a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/checkout">
                                                                    <a>Product Checkout</a>
                                                                </Link>
                                                            </li>
                                                        </ul> */}
                                                    </li>
                                                    <li>
                                                        <Link href="/contact">
                                                            <a>Contact</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-3 col-md-3 col-sm-3 fix-card">
                                        <ul className="header-right f-right d-none d-lg-block d-flex justify-content-between">
                                            <li className="d-none d-xl-block" style={{ display: "flex", justifyContent: "flex-end", paddingTop: 20 }}>
                                                {/* <div className="form-box f-right "> */}
                                                <a className="kontak" href="https://wa.me/085755830844" target="_blank">+ 6285755830844 </a>
                                                {/* <input type="text" name="Search" placeholder="Search products" />
                                                    <div className="search-icon">
                                                        <i className="fas fa-search special-tag"></i>
                                                    </div> */}
                                                {/* </div> */}
                                            </li>
                                            {/* <li className=" d-none d-xl-block">
                                                <div className="favorit-items">
                                                    <i className="far fa-heart"></i>
                                                </div>
                                            </li> */}
                                            {/* <li>
                                                <div className="shopping-card">
                                                    <Link href="/cart">
                                                        <a><i className="fas fa-shopping-cart"></i></a>
                                                    </Link>
                                                </div>
                                            </li> */}
                                            {/* <li className="d-none d-lg-block">
                                                <Link href="/login">
                                                    <a className="btn header-btn">Sign in</a>
                                                </Link>
                                            </li> */}
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
            {children}
            <footer>
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="sindgle-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="footer-logo">
                                            <Link href="/">
                                                <a>
                                                    <img src="/assets/img/logo/logo2_footer.png" alt="" />
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Quick Links</h4>
                                        <ul>
                                            <li>
                                                <Link href="/about">
                                                    <a>About</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a> Offers & Discounts</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a> Get Coupon</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>  Contact Us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>New Products</h4>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a>Woman Cloth</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Fashion Accessories</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a> Man Accessories</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a> Rubber made Toys</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Support</h4>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a>Frequently Asked Questions</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Terms & Conditions</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Privacy Policy</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Privacy Policy</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a>Report a Payment Issue</a>
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
                                        {/* &copy;<script>document.write(new Date().getFullYear());</script>  */}
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
        </div>
    )
}
