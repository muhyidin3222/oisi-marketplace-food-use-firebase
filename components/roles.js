import React, { Component } from 'react'

export default class roles extends Component {
    render() {
        return (
            <div className="shop-method-area section-padding30">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-package"></i>
                                <h6>Cepat</h6>
                                <p>Paket Dikirim Lewat Aplikasi Seperti Go send, Grab, dll yang memungkinkan bisa diantar cuman beberapa jam aja.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-unlock"></i>
                                <h6>Keamanan</h6>
                                <p>Paket Akan Aman Sampai Tujuan, Karena paket yang kami bungkus menggunakan microwave</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-reload"></i>
                                <h6>Amanah</h6>
                                <p>jika paket tidak datang selama 5 hari uang kembali, dan kami akan check ulang orderan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
