import React from 'react'
import Link from 'next/link'
import firebase from './config/firebase'
import data from './dataCategori'

export default function cardCatagori({ hot, name, price, discount, minim_isi, type_unit, type, index, available, obj }) {
    const formatPrice = (value) => {
        const formatter = new Intl.NumberFormat('IDR', {
            currency: 'IDR'
        })
        return formatter.format(value)
    }

    const deleteItem = () => {
        const conf = confirm(`Apakah kamu yakin mau menghapus ${name}`)
        if (conf) {
            firebase.database().ref("produk/" + obj).remove()
                .then(() => M.toast({ html: `Success Delete ${name}` }))
                .catch(() => M.toast({ html: `Error Delete ${name}` }))
        }
    }
    // console.log(id)
    // console.log(data[index] && data[index].img ? data[index].img[0] : "")
    return (
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-product mb-60">
                <div className="product-img">
                    {data[index] && data[index].img ? <img src={"/img/" + data[index].img[0]} /> : ""}
                    {!available ? <div className="habis">
                        <span>Habis</span>
                    </div> : ""}
                    {hot ? <div className="new-product">
                        <span>Laris</span>
                    </div> : ""}
                </div>
                <div className="product-caption">
                    <h4>
                        <div>
                            <a>{name || ""}</a> <a style={{ marginLeft: 10, color: 'red' }}>Isi {minim_isi || ""} {type_unit || ""}</a>
                        </div>
                    </h4>
                    <div className="price">
                        <ul>
                            <li>Rp {discount ? formatPrice(price) : ""}</li>
                            {discount ? <li className="discount">Rp {discount ? formatPrice(discount) : ""}</li> : ""}
                        </ul>
                    </div>
                    {type !== "admin" ? <Link href={{ pathname: "/singel_product", query: { type: "beli", id: obj } }}>
                        <a className={`genric-btn info ${!available ? "disabled" : ""}`}>Beli</a>
                    </Link> :
                        <div className="row justify-content-between">
                            <Link href={{ pathname: "/admin_edit", query: { type: "edit", id: obj } }}>
                                <a className="genric-btn info col-5">Edit</a>
                            </Link>
                            <a className="genric-btn danger col-5" onClick={deleteItem}>Delete</a>
                        </div>}
                </div>
            </div>
        </div>
    )
}