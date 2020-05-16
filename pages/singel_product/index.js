import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'

import dataCategori from '../../components/dataCategori.json'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function index() {
    const router = useRouter()
    const id = Number(router.query.id)
    const [state, setstate] = useState(0)
    const [quantity, setquantity] = useState(1)
    const [data, setData] = useState(dataCategori[id - 1] || {})
    // console.log(data[6])
    useEffect(() => {

    }, [])
    const minusQuantity = () => {
        if (quantity !== 1) {
            setquantity(quantity - 1)
        }
    }

    const plusQuantity = () => {
        setquantity(quantity + 1)
    }
    const formatPrice = (value) => {
        const formatter = new Intl.NumberFormat('IDR', {
            currency: 'IDR'
        })
        return formatter.format(value)
    }

    const { name, dec, img, komposisi, cara_membuat, price, minimIsi } = data
    const total = price * quantity
    return (
        <Layout>
            <div className="product_image_area">
                <div className="container">
                    <div className="row justify-content-center">

                        {img && img.length ? <div className="img-big">
                            <img src={"assets/img/" + img[state]} className="img-big" />
                        </div> : ""}
                        <div className="col-lg-12">
                            <div className="wrepper-child-img">
                                {
                                    img && img.length ? img.map((value, index) => (
                                        <div onClick={() => setstate(index)} key={index} className="card-img">
                                            <img src={"assets/img/" + value} className="img-child" />
                                        </div>
                                    )) : ""
                                }
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="single_product_text text-center">
                                <h3>{name || ""}</h3>
                                {
                                    dec && dec[0] ? dec.map((value, index) => (
                                        <p key={index}>{value}</p>
                                    )) : ""
                                }
                                <h5>Komposisi:</h5>
                                <p>{komposisi || ""}</p>
                                <h5>Cara Membuat:</h5>
                                <p>{cara_membuat || ""}</p>
                                <h5>Isi {minimIsi || ""} pic</h5>
                                <h5>Harga</h5>
                                <p>Rp {formatPrice(price) || ""}</p>
                                <div className="card_area">
                                    <div className="product_count_area">
                                        <p>Jumlah</p>
                                        <div className="product_count d-inline-block">
                                            <span className="product_count_item inumber-decrement" onClick={minusQuantity}> <i className="ti-minus"></i></span>
                                            <input className="product_count_item input-number" type="text" defaultValue={quantity} min={1} max={10} value={quantity} />
                                            <span className="product_count_item number-increment" onClick={plusQuantity}> <i className="ti-plus"></i></span>
                                        </div>
                                        <p>Rp {price ? formatPrice(price * quantity) : "00"}</p>
                                    </div>
                                    <div className="add_to_cart" >
                                        <a href={`https://wa.me/6285212126302?text='Hi,%20Saya%20mau%20pesan%20${name}%20jumlah%20${quantity}%20dengan%20harga%20${total}`} target="_blank" className="btn_3">Beli</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className="subscribe_part section_padding">
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
            </section> */}
        </Layout>
    )
}
