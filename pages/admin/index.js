import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ls from 'local-storage';

import CardCatagori from '../../components/cardCatagori'
// import data from '../../components/dataCategori'
import Layout from '../../components/layout';
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
            setData(snapshot.val())
            setEmty(false)
        }, function (errorObject) {
            setEmty(false)
            console.log("The read failed: " + errorObject.code);
        });
    }, [])
    // console.log(data)
    // , id: data.length + 1
    return (
        <Layout>
            <section className="latest-product-area latest-padding">
                <div className="container">
                    <div className="tab-content justify-content-center align-items-center" id="nav-tabContent">

                        <a style={{ marginBottom: 20 }} className="waves-effect waves-light btn-large  indigo darken-4" onClick={() => router.push({ pathname: "/admin_edit", query: { type: "new", id: data.length + 1 } })}>New Produk</a>

                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="row justify-content-center">
                                {
                                    !emty ? Object.keys(data).map((obj, index) => {
                                        return <CardCatagori {...data[obj]} key={index} type="admin" index={index} obj={obj} />
                                    }) : <div className="spinner-border text-success" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
