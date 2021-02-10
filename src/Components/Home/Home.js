import React, { Component } from 'react';
import './home.css'
import hero from '../img/hero.png'
import about from '../img/about.png'
import admission from '../img/admission.png'
import why from '../img/why.png'
import determine from '../img/determine.png'

class Home extends Component {
    constructor() {
        super();
        this.state = {

        };



    }

    render() {
        return (
            <div>
                <div className="top_container">
                    <header className="header_section">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="index.html">
                                    <span>
                                        Fanadesh
            </span>
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                        <ul className="navbar-nav  ">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="index.html"> Home <span className="sr-only"></span></a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="nav-link" href="about.html"> Courses </a>
                                            </li>

                                            <li className="nav-item ">
                                                <a className="nav-link" href="admission.html"> Login </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="why.html"> Register </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="contact.html">My Account</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <section class="hero_section">
                        <div class="hero-container container">
                            <div class="hero_detail-box">
                                <h1>
                                    Best way
                                    to fund
                                    your study
                                abroad</h1>
                                <p>
                                    ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam </p>
                                <div class="hero_btn-continer">
                                    <a href="" class="call_to-btn btn_white-border">
                                        Read More</a>
                                </div>
                            </div>
                            <div class="hero_img-container">
                                <div>
                                    <img src={hero} alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="common_style">
                    <section class="about_section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="about_img-container">
                                        <img src={about} alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="about_detail-box">
                                        <h3>
                                            About our School </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                        <div class="">
                                            <a href="" class="call_to-btn btn_white-border">
                                                Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="admission_section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="admission_detail-box">
                                        <h3>
                                            Admission open</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                        <div class="">
                                            <a href="" class="call_to-btn btn_white-border">
                                                Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="admission_img-container">
                                        <img src={admission} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="why_section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="why_img-container">
                                        <img src={why} alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="why_detail-box">
                                        <h3>
                                            Why learn on Fanadesh</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
                                        <div class="">
                                            <a href="" class="call_to-btn btn_white-border">
                                                Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="determine_section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="determine_detail-box">
                                        <h3>Datermine the right for you</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                        <div class="">
                                            <a href="" class="call_to-btn btn_white-border">
                                                Read More </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="determine_img-container">
                                        <img src={determine} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section class="info_section layout_padding-top">
                    <div class="info_logo-box">
                        <h2>
                            Fanadesh
          </h2>
                    </div>
                    <div class="container layout_padding2">
                        <div class="row">
                            <div class="col-md-3">
                                <h5>
                                    About Us
                </h5>
                                <p>
                                    dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r
               </p>
                            </div>
                            <div class="col-md-3">
                                <h5>
                                    Useful Link
                </h5>
                                <ul>
                                    <li>
                                        <a href="">
                                            Video games
                    </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Remote control
                   </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            3d controller
                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h5>
                                    Contact Us
                </h5>
                                <p>
                                    dolor sit amet, consectetur magna aliqua. quisdotempor incididunt ut e
                </p>
                            </div>
                            <div class="col-md-3">

                                <div class="subscribe_container">
                                    <h5>
                                        Newsletter
                  </h5>
                                    <div class="form_container">
                                        <form action="">
                                            <input type="email" placeholder="Enter your email" />
                                            <button type="submit">
                                                Subscribe
                      </button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="social_container">

                            <div class="social-box">
                                <a href="">
                                    <img src="images/fb.png" alt="" />
                                </a>

                                <a href="">
                                    <img src="images/twitter.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/linkedin.png" alt="" />
                                </a>
                                <a href="">
                                    <img src="images/instagram.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="container-fluid footer_section">
                    <p>
                        Copyright &copy; 2019 All Rights Reserved By EduLanka<a href=""></a>
                    </p>
                </section>
            </div>
        );
    }
}


export default Home;