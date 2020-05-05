import React from 'react'
import Link from 'next/link'

export default function cardCatagori({ hot, name, price, discount, href, img, id }) {
    return (
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single-product mb-60">
                <div class="product-img">
                    <img src={img} />
                    {hot ? <div class="new-product">
                        <span>Top</span>
                    </div> : ""}
                </div>
                <div class="product-caption">
                    <div class="product-ratting">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <h4>
                        <Link href={href ? `${href}?id=${id}` : "/"}>
                            <a>{name || ""}</a>
                        </Link>
                    </h4>
                    <div class="price">
                        <ul>
                            <li>{price || ""}</li>
                            {discount ? <li class="discount">{discount || ""}</li> : ""}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
