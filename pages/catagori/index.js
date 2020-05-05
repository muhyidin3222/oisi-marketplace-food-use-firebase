import React from 'react'

import Layout from '../../components/layout'
import CardCatagori from '../../components/cardCatagori'
import data from '../../components/dataCategori.json'
import Roles from '../../components/roles'

export default function index() {
    return (
        <Layout>
            <main>
                <div className="slider-area ">
                    <div className="single-slider slider-height2 d-flex align-items-center" data-background="assets/img/hero/category.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Daftar Produk</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="latest-product-area latest-padding">
                    <div className="container">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row">
                                    {
                                        data.map((value, index) => (
                                            <CardCatagori {...value} key={index} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Roles />

                {/* <div className="latest-wrapper lf-padding">
                    <div className="latest-area latest-height d-flex align-items-center" data-background="assets/img/collection/latest-offer.png">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                                    <div className="latest-caption">
                                        <h2>Get Our<br />Latest Offers News</h2>
                                        <p>Subscribe news latter</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-6 ">
                                    <div className="latest-subscribe">
                                        <form action="#">
                                            <input type="email" placeholder="Your email here" />
                                            <button>Shop Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="man-shape">
                            <img src="assets/img/collection/latest-man.png" alt="" />
                        </div>
                    </div>
                </div> */}
                <div className="gallery-wrapper lf-padding">
                    <div className="gallery-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="gallery-items">
                                    <img src="assets/img/gallery/gallery1.jpg" alt="" />
                                </div>
                                <div className="gallery-items">
                                    <img src="assets/img/gallery/gallery2.jpg" alt="" />
                                </div>
                                <div className="gallery-items">
                                    <img src="assets/img/gallery/gallery3.jpg" alt="" />
                                </div>
                                <div className="gallery-items">
                                    <img src="assets/img/gallery/gallery4.jpg" alt="" />
                                </div>
                                <div className="gallery-items">
                                    <img src="assets/img/gallery/gallery5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    )
}
