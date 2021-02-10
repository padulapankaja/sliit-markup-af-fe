import React, { Component } from 'react';

import '../Home/home.css'
import { Link } from "react-router-dom";


class Footer extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div>
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
                        Copyright &copy; 2021 All Rights Reserved By EduLanka<a href=""></a>
                    </p>
                </section>
            </div>
        );
    }
}


export default Footer;