import React from 'react'

import Layout from '../../components/layout'
import SliderArea from '../../components/sliderArea'

export default function index() {
    return (
        <Layout>
            <SliderArea title="Checkout" />
            <section className="checkout_area section_padding">
                <div className="container">
                    <div className="billing_details">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3>Detail Pembeli</h3>
                                <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                                    <div className="col-md-6 form-group p_star">
                                        <input type="text" className="form-control" name="name" />
                                        <span className="placeholder" data-placeholder="Name"></span>
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input type="text" className="form-control" name="phone" />
                                        <span className="placeholder" data-placeholder="Phone/WA"></span>
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input type="email" className="form-control" name="email" />
                                        <span className="placeholder" data-placeholder="Email"></span>
                                    </div>
                                </form>
                                <h3>Detail Alamat Pembeli </h3>
                                <p className="text-danger">Alamat Pebeli wajib berdomisili diJakarta</p>
                                <p className="text-danger">Tolong Masukan Alamat Anda Dengan Benar Supaya Driver Tidak Bingung</p>
                                <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                                    <div className="col-md-6 form-group p_star">
                                        <input type="text" className="form-control" name="provinsi" />
                                        <span className="placeholder" data-placeholder="Provinsi"></span>
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input type="text" className="form-control" name="kabupaten" />
                                        <span className="placeholder" data-placeholder="Kabupaten/Kota"></span>
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input type="email" className="form-control" name="kocamatan" />
                                        <span className="placeholder" data-placeholder="Kocamatan"></span>
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input type="email" className="form-control" name="rt_rw" />
                                        <span className="placeholder" data-placeholder="Rt dan Rw"></span>
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input type="email" className="form-control" name="jalan" />
                                        <span className="placeholder" data-placeholder="Jalan"></span>
                                    </div>
                                    <div className="col-md-6 form-group p_star">
                                        <input type="email" className="form-control" name="kode" />
                                        <span className="placeholder" data-placeholder="Kode Pos"></span>
                                    </div>
                                    <div className="col-md-12 form-group p_star">
                                        <input type="email" className="form-control" name="detail_location" />
                                        <span className="placeholder" data-placeholder="Detail Lokasi Anda"></span>
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea className="form-control" name="catatan" rows="1" placeholder="Catatan" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="order_box">
                                    <h2>Order Kamu</h2>
                                    <ul className="list">
                                        <li>
                                            <a>Produk<span>Total</span></a>
                                        </li>
                                        <li>
                                            <a>Fresh Blackberry<span className="middle">x 02</span>
                                                <span className="last">$720.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>Fresh Tomatoes<span className="middle">x 02</span>
                                                <span className="last">$720.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>Fresh Brocoli<span className="middle">x 02</span>
                                                <span className="last">$720.00</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="list list_2">
                                        <li>
                                            <a>Subtotal<span>$2160.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>Shipping<span>Flat rate: $50.00</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>Total<span>$2210.00</span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/* <div className="payment_item">
                                        <div className="radion_btn">
                                            <input type="radio" id="f-option5" name="selector" />
                                            <label for="f-option5">Check payments</label>
                                            <div className="check"></div>
                                        </div>
                                        <p>Please send a check to Store Name, Store Street, Store Town,</p>
                                    </div> */}
                                    {/* <div className="creat_account">
                                        <input type="checkbox" id="f-option4" name="selector" />
                                        <label for="f-option4">I’ve read and accept the </label>
                                        <a>terms & conditions*</a>
                                    </div> */}
                                    <a className="btn_3">Proceed to Paypal</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
