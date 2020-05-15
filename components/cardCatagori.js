import React from 'react'
import Link from 'next/link'

export default function cardCatagori({ hot, name, price, discount, href, img, id, minimIsi }) {

    const formatPrice = (value) => {
        const formatter = new Intl.NumberFormat('IDR', {
            currency: 'IDR'
        })
        return formatter.format(value)
    }

    return (
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-product mb-60">
                <div class="product-img">
                    <img src={"/assets/img/" + img[0]} />
                    {hot ? <div class="new-product">
                        <span>Laris</span>
                    </div> : ""}
                </div>
                <div class="product-caption">
                    {/* <div class="product-ratting">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div> */}
                    <h4>
                        <Link href={href ? `${href}?id=${id}` : "/"}>
                            <div>
                                <a>{name || ""}</a> <a style={{ marginLeft: 10, color: 'red' }}>Isi {minimIsi || ""}</a>
                            </div>
                        </Link>
                    </h4>
                    <div class="price">
                        <ul>
                            <li>Rp {discount ? formatPrice(price) : "" }</li>
                            {discount ? <li class="discount">Rp {discount ? formatPrice(discount) : ""}</li> : ""}
                        </ul>
                    </div>
                    <Link href={href ? `${href}?id=${id}` : "/"}>
                        <a className="genric-btn info">Beli</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}


// {
//     "id": 14,
//     "img": [
//         "product/frozen_potatoes/1.jpg",
//         "product/frozen_potatoes/2.jpg",
//         "product/frozen_potatoes/3.jpg"
//     ],
//     "hot": false,
//     "price": 70.000,
//     "discount": 71.500,
//     "name": "Frozen Potatoes",
//     "per": "Gram",
//     "href": "/",
//     "minimIsi": ""
// },