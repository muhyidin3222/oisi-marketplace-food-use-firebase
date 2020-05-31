import React, { useState } from 'react'

import Layout from '../../components/layout'
import SliderArea from '../../components/sliderArea'

export default function index() {
    const [data, setData] = useState({})
    const { name, phone, message } = data
    const onChange = (e) => {
        data[e.target.name] = e.target.value
        setData({ ...data })
    }

    return (
        <Layout>
            <SliderArea title="Kontak Kami" />
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Kirim Pesan ke Kami</h2>
                        </div>
                        <div className="col-lg-6">
                            <form className="form-contact contact_form">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder=" Enter Message" value={message || ""} onChange={onChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="name" id="name" value={name || ""} onChange={onChange} type="text" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="phone" id="phone" value={phone || ""} onChange={onChange} type="number" placeholder="No What App Kamu" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <a href={`https://wa.me/6289695103118?text=Hi,%20Nama:${name || ""}, Phone:${phone || ""}, Pesan%20saya:${message || ""}`} target="_blank">
                                        <button type="button" className="button button-contactForm boxed-btn">Kirim</button>
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-home"></i></span>
                                <div className="media-body">
                                    <h3>Alamat Toko Kami</h3>
                                    <p><a target="_blank" href="https://www.google.com/maps/place/Muhammadiyah+PAUD+Aisyiyah/@-6.2288235,106.7488155,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f10b40da79e3:0xcc23461962a5ece0!8m2!3d-6.2288235!4d106.7510042">Rumah depan TK turun kebawah, Muhammadiyah PAUD Aisyiyah, Jalan Masjid Darul Fallah GG beceng, RT.6/RW.10, Petukangan Utara, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, CODE POS 12260</a></p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                <div className="media-body">
                                    <h3>Nomer What App</h3>
                                    <p><a target="_blank" href={`https://wa.me/6289695103118`}>6289695103118</a></p>
                                    <p><a target="_blank" href={`https://wa.me/6285771659200`}>6285771659200</a></p>
                                    <p><a target="_blank" href={`https://wa.me/6285212126302`}>6285212126302</a></p>
                                    <p><a target="_blank" href={`https://wa.me/6285755830844`}>6285755830844</a></p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3>Email</h3>
                                    <p>muhyidin480@gmail.com</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3>Shope</h3>
                                    <a href="https://shopee.co.id/product/51615551/5734182092?smtt=0.0.9" target="_blank" >Shope herdan.basemah</a>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3>Facebook</h3>
                                    <a href="https://www.facebook.com/Oisifood-100949881621436/" target="_blank" >facebook.com/Oisifood</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

