import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/layout'
import dataCategori from '../../components/dataCategori'
import firebase from '../../components/config/firebase'
import ModalLogin from '../../components/modalLogin'

export default function index() {
    const router = useRouter()
    const id = Number(router.query.id)
    const { type } = router.query
    const [state, setstate] = useState(0)
    const [quantity, setquantity] = useState(1)
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({})
    const [emty, setEmty] = useState(true)
    const [activeModal, setActiveModal] = useState(false)
    const { name, des1, des2, des3, des4, komposisi, cara_membuat, price, minim_isi, available, discount, hot, type_unit } = data
    // console.log(data[6])

    useEffect(() => {
        // console.log(type, id)
        firebase.database().ref(`produk/${id}`).on("value", function (snapshot) {
            setData(snapshot.val())
            setEmty(false)
        }, function (errorObject) {
            setEmty(false)
            console.log("The read failed: " + errorObject.code);
        });
    }, [id])

    const handleOk = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

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

    const onChange = (e) => {
        data.quantity = e.target.value
        setData({ data })
    }

    const buy = () => {
        if (true) {
            setActiveModal(!activeModal)
        } else {
            router.push({ pathname: 'checkout', query: { id, total } })
        }
    }

    const total = price * quantity

    useEffect(() => {

    }, [])


    return (
        <Layout>
            <div className="product_image_area">
                <div className="container">
                    <div className="row justify-content-center">

                        {dataCategori[id] ? <div className="img-big">
                            <img src={"img/" + dataCategori[id].img[state]} className="img-big" />
                        </div> : ""}
                        <div className="col-lg-12">
                            <div className="wrepper-child-img">
                                {
                                    dataCategori[id] && dataCategori[id].img ? dataCategori[id].img.map((value, index) => (
                                        <div onClick={() => setstate(index)} key={index} className="card-img-singel-product">
                                            <img src={"img/" + value} className="img-child" />
                                        </div>
                                    )) : ""
                                }
                            </div>
                        </div>

                        <div className="col-lg-8 justify-content-center" style={{ display: 'flex', justifyContent: 'center' }}>
                            {
                                emty ?
                                    <div className="spinner-border text-success mt-50" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    :
                                    <div className="single_product_text text-center">
                                        <h3>{name || ""}</h3>
                                        <h5 style={{ marginTop: 10 }}>Komposisi:</h5>
                                        <p>{komposisi || ""}</p>
                                        <h5 style={{ marginTop: 10 }}>Cara Membuat:</h5>
                                        <p>{cara_membuat || ""}</p>
                                        <h5 style={{ marginTop: 10 }}>Penjelasan:</h5>
                                        <p>{des1 || ""}</p>
                                        <p>{des2 || ""}</p>
                                        <p>{des3 || ""}</p>
                                        <p>{des4 || ""}</p>
                                        <h5 style={{ marginTop: 10 }}>Isi</h5>
                                        <p>{minim_isi || ""} {type_unit}</p>
                                        <h5 style={{ marginTop: 10 }}>Harga</h5>
                                        <p>Rp {formatPrice(price) || ""}</p>
                                        <div className="card_area">
                                            <div className="product_count_area">
                                                <p>Jumlah</p>
                                                <div className="product_count d-inline-block">
                                                    <span className="product_count_item inumber-decrement" onClick={minusQuantity}> <i className="ti-minus"></i></span>
                                                    <input className="product_count_item input-number" type="text" min={1} max={10} value={quantity || ""} onChange={() => { onChange }} />
                                                    <span className="product_count_item number-increment" onClick={plusQuantity}> <i className="ti-plus"></i></span>
                                                </div>
                                                <p>Rp {price ? formatPrice(price * quantity) : "00"}</p>
                                            </div>
                                            <div className="add_to_cart" onClick={handleOk} >
                                                <a className="waves-effect waves-light btn-large lime accent-4" style={{ width: 150 }}
                                                    // onClick={buy}
                                                href={`https://wa.me/6285212126302?text='Hi,%20Saya%20mau%20pesan%20${name || ""}%20jumlah%20${quantity | ""}*%20${price}%20Total%20harga%20${total || ""}`} target="_blank" className="btn_3"
                                                >Beli</a>
{/* 
                                                <a href={`https://wa.me/6285212126302?text='Hi,%20Saya%20mau%20pesan%20${name}%20jumlah%20${quantity}%20dengan%20harga%20${total}`} target="_blank" className="btn_3">Beli</a> */}
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ModalLogin
                setActiveModal={setActiveModal}
                active={activeModal}
                buyData={{ id, total }}
            />
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
