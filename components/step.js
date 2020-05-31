import React, { Component } from 'react'

export default class step extends Component {
    render() {
        return (
            <div className="gallery-wrapper lf-padding">
                <div className="gallery-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="gallery-items">
                                <img src="/img/pesan.jpg" alt="" />
                            </div>
                            <div className="gallery-items">
                                <img src="/img/delivery.jpg" alt="" />
                            </div>
                            <div className="gallery-items">
                                <img src="/img/in_home.jpg" alt="" />
                            </div>
                            <div className="gallery-items">
                                <img src="/img/goreng.jpeg" alt="" />
                            </div>
                            <div className="gallery-items">
                                <img src="/img/eat_food.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
