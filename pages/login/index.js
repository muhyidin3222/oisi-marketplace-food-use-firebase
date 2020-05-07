import React from 'react'
import Layout from '../../components/layout'

export default function index() {
    return (
        <Layout>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center" data-background="assets/img/hero/category.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Login</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="login_part section_padding ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_text text-center">
                                <div className="login_part_text_iner">
                                    <h2>New to our Shop?</h2>
                                    <p>There are advances being made in science and technology
                                everyday, and a good example of this is the</p>
                                    <a href="#" className="btn_3">Create an Account</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="login_part_form">
                                <div className="login_part_form_iner">
                                    <h3>Welcome Back ! <br />
                                        Please Sign in now</h3>
                                    <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                                        <div className="col-md-12 form-group p_star">
                                            <input type="text" className="form-control" id="name" name="name" defaultValue=""
                                                placeholder="Username" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <input type="password" className="form-control" id="password" name="password" defaultValue=""
                                                placeholder="Password" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account d-flex align-items-center">
                                                <input type="checkbox" id="f-option" name="selector" />
                                                <label for="f-option">Remember me</label>
                                            </div>
                                            <button type="submit" defaultValue="submit" className="btn_3">
                                                log in
                                    </button>
                                            <a className="lost_pass" href="#">forget password?</a>
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
