import React, { useState } from 'react'
const ls = require('local-storage');
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import firebase from '../../components/config/firebase'


// "devDependencies": {
//     "babel-plugin-import": "^1.13.0",
//     "css-loader": "^3.5.3",
//     "file-loader": "^6.0.0",
//     "next-compose-plugins": "^2.2.0",
//     "style-loader": "^1.2.1",
//     "url-loader": "^4.1.0"
//   },

export default function index() {
    const router = useRouter()
    const [user, setUser] = useState({})

    const onChange = (val) => {
        user[val.target.name] = val.target.value
        setUser({ ...user })
    }
    const { email, password } = user

    const onSubmit = async (e) => {
        e.preventDefault()
        if (email === "testes3222@gmail.com" && password === "muhyidin123") {
            // console.log(user)
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email,user.password)
                .then(res => {
                    // console.log(res)
                    if (res) {
                        ls.set("user", JSON.stringify(res.user))
                        router.push("/admin")
                    }
                })
                .catch(res => console.log(res))
        } else {
            M.toast({ html: `ERROR LOGIN` })
        }
    }
    return (
        <Layout>
            <section className="login_part section_padding ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="login_part_form">
                                <div className="login_part_form_iner">
                                    <h3>Welcome Back ! <br />
                                        Please Sign in now</h3>
                                    <form className="row contact_form" method="post" onSubmit={onSubmit}>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="email" className="form-control" name="email" value={user.email || ""} placeholder="Email" onChange={onChange} />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="password" className="form-control" name="password" value={user.password || ""} onChange={onChange} placeholder="Password" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            {/* <div className="creat_account d-flex align-items-center">
                                                <input type="checkbox" id="f-option" name="selector" />
                                                <label for="f-option">Remember me</label>
                                            </div> */}
                                            <button type="submit" onClick={onSubmit} className="btn_3">log in</button>
                                            {/* <a className="lost_pass" href="#">forget password?</a> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

// <div className="col-lg-6 col-md-6">
//     <div className="login_part_text text-center">
//         <div className="login_part_text_iner">
//             <h2>New to our Shop?</h2>
//             <p>There are advances being made in science and technology
//         everyday, and a good example of this is the</p>
//             <a href="#" className="btn_3">Create an Account</a>
//         </div>
//     </div>
// </div>
