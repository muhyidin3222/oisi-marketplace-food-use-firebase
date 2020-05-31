import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/layout'
import dataCategori from '../../components/dataCategori'
import firebase from '../../components/config/firebase'

export default function index() {
    const router = useRouter()
    const { type } = router.query
    const id = Number(router.query.id)
    const [state, setstate] = useState(0)
    const [visible, setVisible] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        if (type && type === "edit") {
            firebase.database().ref(`produk/${id}`).on("value", function (snapshot) {
                setData(snapshot.val())
                // console.log(snapshot.val())
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
        }
    }, [])
    // console.log(type, id, type, id)

    const onChange = (e) => {
        data[e.target.name] = e.target.value
        setData({ ...data })
    }

    const { name, des1, des2, des3, des4, komposisi, cara_membuat, price, minim_isi, available, discount, hot, type_unit } = data

    const update = () => {
        if (id !== null || "") {
            firebase
                .database()
                .ref(`produk/${id}`)
                .set({
                    name: name || null,
                    available: available || true,
                    price: price || null,
                    discount: discount || null,
                    hot: hot || false,
                    minim_isi: minim_isi || null,
                    type_unit: type_unit || null,
                    komposisi: komposisi || null,
                    cara_membuat: cara_membuat || null,
                    des1: des1 || null,
                    des2: des2 || null,
                    des3: des3 || null,
                    des4: des4 || null,
                })
                .then(res => {
                    M.toast({ html: `Success add` })
                    router.push("/admin")
                })
                .catch(err => {
                    M.toast({ html: `error add` })
                })
        }
    }

    const checkBox = (e) => {
        const nameCheckBox = e.target.name
        data[nameCheckBox] = data[nameCheckBox] === true || data[nameCheckBox] === false ? !data[nameCheckBox] : true
        setData({ ...data })
    }
    return (
        <Layout>
            <div className="product_image_area">
                <div className="container">
                    <div className="row justify-content-center">
                        {type === "edit" && dataCategori[id] ? <div className="img-big">
                            <img src={"img/" + dataCategori[id].img[state]} className="img-big" />
                        </div> : ""}
                        <div className="col-lg-12">
                            <div className="wrepper-child-img">
                                {
                                    type === "edit" && dataCategori[id] && dataCategori[id].img ? dataCategori[id].img.map((value, index) => (
                                        <div onClick={() => setstate(index)} key={index} className="card-img-singel-product">
                                            <img src={"img/" + value} className="img-child" />
                                        </div>
                                    )) : ""
                                }
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="single_product_text">
                                <div className="wrepper-form">
                                    <label>
                                        <input type="checkbox" className="filled-in" checked="checked" name="hot" checked={hot || false} onChange={checkBox} />
                                        <span className="label-input">Laris</span>
                                    </label>
                                </div>
                                <div className="wrepper-form">
                                    <label>
                                        <input type="checkbox" className="filled-in" checked="checked" name="available" checked={available || false} onChange={checkBox} />
                                        <span className="label-input">Tersedia Atau Tidak</span>
                                    </label>
                                </div>
                                <label className="label-input">Name</label>
                                <input className="form-control form-input" value={name || ""} onChange={onChange} name="name" />
                                <label className="label-input">Isi</label>
                                <input className="form-control form-input" value={minim_isi || ""} onChange={onChange} name="minim_isi" />
                                <label className="label-input">Harga</label>
                                <input className="form-control form-input" value={price || ""} onChange={onChange} name="price" />
                                <label className="label-input">Discount</label>
                                <input className="form-control form-input" value={discount || ""} onChange={onChange} name="discount" />
                                <label className="label-input">Type Unit</label>
                                <input className="form-control form-input" value={type_unit || ""} onChange={onChange} name="type_unit" />
                                <label className="label-input">Komposisi</label>
                                <textarea className="form-control materialize-textarea" value={komposisi || ""} onChange={onChange} name="komposisi" />
                                <label className="label-input">Cara Membuat</label>
                                <textarea className="form-control materialize-textarea" value={cara_membuat || ""} onChange={onChange} name="cara_membuat" />

                                <label className="label-input">Description 1</label>
                                <textarea className="form-control materialize-textarea" value={des1 || ""} onChange={onChange} name="des1" />
                                <label className="label-input">Descriptio 2</label>
                                <textarea className="form-control materialize-textarea" value={des2 || ""} onChange={onChange} name="des2" />
                                <label className="label-input">Description 3</label>
                                <textarea className="form-control materialize-textarea" value={des3 || ""} onChange={onChange} name="des3" />
                                <label className="label-input">Description 4</label>
                                <textarea className="form-control materialize-textarea" value={des4 || ""} onChange={onChange} name="des4" />
                            </div>
                        </div>
                    </div>
                    <button className="genric-btn info update-produk" onClick={update}>{type === "edit" ? "Update" : "New"}</button>
                </div>
            </div>
        </Layout>
    )
}
