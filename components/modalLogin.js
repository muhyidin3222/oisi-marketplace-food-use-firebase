
import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useRouter } from 'next/router'

const ls = require('local-storage');

import firebase from './config/firebase'

export default function modalLogin({ active, setActiveModal, buyData }) {
    const router = useRouter()
    const [typeLogin, setTypeLogin] = useState("login")
    const [validated, setValidated] = useState(false)
    const [resValidation, setResValidation] = useState({})
    const [data, setData] = useState({})
    const { email, password } = data
    var userId = firebase.auth().currentUser

    useEffect(() => {
        // const key = firebase.auth().currentUser.uid
        // console.log(key)
        return () => {
        }
    }, [])

    const pushRouter = (resUser) => {
        ls.set("user", JSON.stringify(resUser))
        router.push({ pathname: '/checkout', query: { id: buyData.id, total: buyData.total } })
    }

    const clickLogin = (e) => {
        setValidated(true);
        e.preventDefault();

        if (typeLogin === "login") {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                    setResValidation({ ...res, validated: true })
                    if (res.user) {
                        console.log(res)
                        ls.set("user", JSON.stringify(res.user))
                        M.toast({ html: `Success add` })
                        pushRouter(res.user)
                    }
                })
                .catch(res => {
                    setResValidation({ ...res, validated: false })
                    M.toast({ html: `Error add` })
                    console.log(res)
                })
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(res => {
                    setResValidation({ ...res, validated: true })
                    M.toast({ html: `Success add` })
                    console.log(res)
                    if (res.user) {
                        ls.set("user", JSON.stringify(res.user))
                        pushRouter(res.user)
                    }
                })
                .catch(res => {
                    setResValidation({ ...res, validated: false })
                    M.toast({ html: `Error add` })
                    console.log(res)
                })
        }
        // setActiveModal(false)
    }

    const onChange = (e) => {
        data[e.target.name] = e.target.value
        setData({ ...data })
    }

    console.log(userId, 'userIds')
    const signInSuccessWithAuthResult = (res) => {
        console.log(res)
        addNewOrder(res.user)
        M.toast({ html: `Success add` })
        ls.set("user", JSON.stringify(res.user))
        // if (res.credential) {
        // } else {
        // }
    }

    const addNewOrder = async (res) => {
        // firebase.database().ref('/users/').once('value').then((res) => {
        //     setResValidation(snapshot.val())
        //     // ls.set("user", JSON.stringify(res.user))
        //     var username = snapshot.val()
        //     console.log(snapshot.val())
        //     pushRouter(res.user)
        //     M.toast({ html: `Success add` })
        // }).catch(err => {
        //     console.log(err)
        //     M.toast({ html: `error add` })
        // })

        var postsRef = firebase.database().ref(`order/${res.uid}/`)
        try {
            // firebase.database().ref(`order/${res.id}`).on("value")
            // firebase.database().ref(`produk/${id}`).set({})
            const res = await postsRef.push().set({ name: 'tes', total: "test" })
            console.log(res)
        } catch (err) {
            console.log(err)
            M.toast({ html: `Success add` })
        }
    }

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: signInSuccessWithAuthResult
        }
    };

    console.log(resValidation)
    return (
        <Modal show={active} onHide={() => setActiveModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{typeLogin === "login" ? "Masuk" : "Daftar"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form action="post" onSubmit={clickLogin} noValidate validated={validated}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control size="lg" type="email" name="email" placeholder="email" value={email || ""} onChange={onChange} required />
                        <Form.Control.Feedback type="valid" >Email benar</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" >Email salah</Form.Control.Feedback>
                        <br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control size="lg" type="password" name="password" placeholder="Password" value={password || ""} onChange={onChange} required />
                        <Form.Control.Feedback type="valid" >Password benar</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" >Password salah</Form.Control.Feedback>
                    </Form.Group>
                    {resValidation.validated !== null ? < div className={`${!resValidation.validated ? "text-danger" : "text-success"} m-1`}>{!resValidation.validated ? resValidation.message : "Success Masuk"}</div> : ""}
                    <Button type="submit" variant="primary btn-sigin" onClick={clickLogin}>{typeLogin === "login" ? "Masuk" : "Buat Akun"}</Button>
                </Form>
                <div className="justify-content-center" style={{ display: 'flex', justifyContent: "center", flexDirection: 'column', marginTop: 20 }}>
                    {
                        typeLogin !== "login" ?
                            <button className="waves-effect waves-light btn-large btn-auth" onClick={() => setTypeLogin("login")}>Masuk</button>
                            :
                            <button className="waves-effect waves-light btn btn-auth" onClick={() => setTypeLogin("sigin")}>Buat Akun</button>
                    }
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </div>
                {/* <Button onClick={addNewOrder}>test</Button> */}
            </Modal.Body>
        </Modal >
    )
}