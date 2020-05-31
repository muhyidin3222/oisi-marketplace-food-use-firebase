import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ls from 'local-storage';

import Layout from '../../components/layout'
import CardCatagori from '../../components/cardCatagori'
import Roles from '../../components/roles'
import SliderArea from '../../components/sliderArea'
import firebase from '../../components/config/firebase'

export default function index() {
    const router = useRouter()
    const user = ls.get("user")
    const [data, setData] = useState([])
    const [emty, setEmty] = useState(true)

    useEffect(() => {
        if (user) {
            const token = JSON.parse(user).stsTokenManager.accessToken
            if (!token) {
                router.push("/login")
            }
        }

        firebase.database().ref('produk').on("value", function (snapshot) {
            setData(Object.values(snapshot.val()))
            setEmty(false)
        }, function (errorObject) {
            setEmty(false)
            console.log("The read failed: " + errorObject.code);
        });
    }, [])
    // console.log('asdfasfd data', Object.values(data)) 
    return (
        <Layout>
            <main>
                <SliderArea title="Daftar Produk" />
                <section className="latest-product-area latest-padding">
                    <div className="container">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="row justify-content-center">
                                    {
                                        !emty ? Object.keys(data).map((obj, index) => (
                                            <CardCatagori {...data[obj]} key={index} type="clien" index={index} obj={obj} />
                                        )) : <div className="spinner-border text-success" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Roles />

                {/* <div className="latest-wrapper lf-padding">
                    <div className="latest-area latest-height d-flex align-items-center" data-background="img/collection/latest-offer.png">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-xl-5 col-lg-5 col-md-6 offset-xl-1 offset-lg-1">
                                    <div className="latest-caption">
                                        <h2>Get Our<br />Latest Offers News</h2>
                                        <p>Subscribe news latter</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-6 ">
                                    <div className="latest-subscribe">
                                        <form action="#">
                                            <input type="email" placeholder="Your email here" />
                                            <button>Shop Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="man-shape">
                            <img src="img/collection/latest-man.png" alt="" />
                        </div>
                    </div>
                </div> */}
            </main>
        </Layout >
    )
}
