import React from 'react'

export default function sliderArea({ title }) {
    return (
        <div className="slider-area">
            <div className="single-slider slider-height2 d-flex align-items-center" data-background="img/hero/category.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center">
                                <h2>{title || ""}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}