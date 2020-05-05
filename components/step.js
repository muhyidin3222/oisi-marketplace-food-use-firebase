import React, { Component } from 'react'

export default class step extends Component {
    render() {
        return (
            <div className="gallery-wrapper lf-padding">
                <div className="gallery-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="gallery-items">
                                <img src="/assets/img/pesan.jpg" alt="" />
                            </div>
                            <div className="gallery-items">
                                <img src="/assets/img/delivery.jpg" alt="" />
                            </div>
                            <div className="gallery-items">
                                <img src="/assets/img/in_home.jpg" alt="" />
                            </div>
                            <div className="gallery-items">
                                <img src="/assets/img/goreng.jpeg" alt="" />
                            </div>
                            <div className="gallery-items">
                                <img src="/assets/img/eat_food.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
