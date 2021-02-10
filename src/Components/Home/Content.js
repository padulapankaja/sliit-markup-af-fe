import React, { Component } from 'react';

import './home.css';
import hero from '../img/hero.png'
import about from '../img/about.png'
import admission from '../img/admission.png'
import why from '../img/why.png'
import determine from '../img/determine.png'

class Content extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
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
                                        Why learn on EduLanka</h3>
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
        );
    }
}


export default Content;