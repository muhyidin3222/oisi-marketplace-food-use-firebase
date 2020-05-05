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
                                <h6>Go Send</h6>
                                <p>Paket Dikirim Lewat Go Send</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-unlock"></i>
                                <h6>Keamanan</h6>
                                <p>Paket Akan Aman Sampai Tujuan</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-method mb-40">
                                <i className="ti-reload"></i>
                                <h6>Amanah</h6>
                                <p>Terpercaya Tidak Tipu-2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
