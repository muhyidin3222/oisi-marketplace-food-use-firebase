import React from 'react'
import Layout from '../../components/layout'

export default function index() {
    return (
        <Layout>

            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center" data-background="img/hero/category.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>product list</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product_list section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product_sidebar">
                                <div className="single_sedebar">
                                    <form action="#">
                                        <input type="text" name="#" placeholder="Search keyword" />
                                        <i className="ti-search"></i>
                                    </form>
                                </div>
                                <div className="single_sedebar">
                                    <div className="select_option">
                                        <div className="select_option_list">Category <i className="right fas fa-caret-down"></i> </div>
                                        <div className="select_option_dropdown">
                                            <p><a href="#">Category 1</a></p>
                                            <p><a href="#">Category 2</a></p>
                                            <p><a href="#">Category 3</a></p>
                                            <p><a href="#">Category 4</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_sedebar">
                                    <div className="select_option">
                                        <div className="select_option_list">Type <i className="right fas fa-caret-down"></i> </div>
                                        <div className="select_option_dropdown">
                                            <p><a href="#">Type 1</a></p>
                                            <p><a href="#">Type 2</a></p>
                                            <p><a href="#">Type 3</a></p>
                                            <p><a href="#">Type 4</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="product_list">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product6.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Cervical pillow for airplane
                                    car office nap pillow</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product2.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product5.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Foam filling cotton slow rebound pillows</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product6.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product1.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product4.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Sleeping orthopedic sciatica Back Hip Joint Pain relief</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product5.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product3.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Sleeping orthopedic sciatica Back Hip Joint Pain relief</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product2.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="img/categori/product1.png" alt="" className="img-fluid" />
                                            <h3> <a href="single-product.html">Geometric striped flower home classy decor</a> </h3>
                                            <p>From $5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="load_more_btn text-center">
                                    <a href="#" className="btn_3">Load More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="client_review">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="client_review_slider owl-carousel">
                                <div className="single_client_review">
                                    <div className="client_img">
                                        <img src="img/client.png" alt="#" />
                                    </div>
                                    <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                                <div className="single_client_review">
                                    <div className="client_img">
                                        <img src="img/client_1.png" alt="#" />
                                    </div>
                                    <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                                <div className="single_client_review">
                                    <div className="client_img">
                                        <img src="img/client_2.png" alt="#" />
                                    </div>
                                    <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h5>- Micky Mouse</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="shop-method-area section-padding30">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-package"></i>
                                <h6>Free Shipping Method</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-unlock"></i>
                                <h6>Secure Payment System</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-reload"></i>
                                <h6>Secure Payment System</h6>
                                <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
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
