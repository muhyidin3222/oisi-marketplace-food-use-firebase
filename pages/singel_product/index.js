import React from 'react'
import Layout from '../../components/layout'

import data from '../../components/dataCategori.json'
import { useRouter } from 'next/router'

export default function index() {
    const router = useRouter()
    const id = router.query.id
    const dataCategori = data[id]
    const { img, hot, price, discount, name, href, per, dec, total } = dataCategori
    // console.log(dataCategori)
    return (
        <Layout>
            {/* <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center" data-background="assets/img/hero/category.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>product Details</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="product_image_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="product_img_slide owl-carousel">
                                <div className="single_product_img">
                                    <img src="assets/img/product/product_list_1.png" alt="#" className="img-fluid" />
                                </div>
                                {/*     <div className="single_product_img">
                                    <img src="assets/img/product/single_product.png" alt="#" className="img-fluid" />
                                </div>
                                <div className="single_product_img">
                                    <img src="assets/img/product/single_product.png" alt="#" className="img-fluid" />
                                </div>*/}
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="single_product_text text-center">
                                <h3>{name || ""}</h3>
                                <p>{dec}</p>
                                <p>{dec}</p>
                                <p>{dec}</p>
                                <div className="card_area">
                                    <div className="product_count_area">
                                        <p>Quantity</p>
                                        <div className="product_count d-inline-block">
                                            <span className="product_count_item inumber-decrement"> <i className="ti-minus"></i></span>
                                            <input className="product_count_item input-number" type="text" value="1" min="0" max="10" />
                                            <span className="product_count_item number-increment"> <i className="ti-plus"></i></span>
                                        </div>
                                        <p>$5</p>
                                    </div>
                                    <div className="add_to_cart">
                                        <a href="#" className="btn_3">add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="subscribe_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="subscribe_part_content">
                                <h2>Get promotions & updates!</h2>
                                <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal .</p>
                                <div className="subscribe_form">
                                    <input type="email" placeholder="Enter your mail" />
                                    <a href="#" className="btn_1">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
