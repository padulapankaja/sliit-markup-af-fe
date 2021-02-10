import React, { Component } from 'react';
import '../Home/home.css'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SignOut } from "../Redux/Action/authAction";

class NavBar extends Component {
    constructor() {
        super();
        this.state = {

        };

    }
    componentDidMount = () => {
        // this.props.SignOut();
        console.log(this.props.auth);
        console.log(this.props.auth);
    }

    logout = () => {
        this.props.SignOut && this.props.SignOut();
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="top_container">
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href="index.html">
                                <span>
                                    EduLanka
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
                                            <Link
                                                to="/courses"
                                                className="nav-link"
                                            > Courses </Link>
                                        </li>
                                        {
                                            this.props.auth.isAuthenticated != true ? <li className="nav-item">
                                                <Link
                                                    to="/login"
                                                    className="nav-link"
                                                > Login </Link>

                                            </li> : <li className="nav-item">
                                                    <Link
                                                        onClick={() => this.logout()}
                                                        className="nav-link"
                                                    > Logout </Link>

                                                </li>
                                        }



                                        {
                                            this.props.auth.isAuthenticated != true ? <li className="nav-item">

                                                <a className="nav-link" href="#register-section"> Register </a>
                                            </li>
                                                : null
                                        }
                                        {
                                            this.props.auth.isAuthenticated != true ? null
                                                : <li className="nav-item">
                                                    <a className="nav-link" href="contact.html">My Courses</a>
                                                </li>
                                        }



                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
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
                        </div>
                    </section>
                </header>
            </div>
        );
    }
}




const mapStateToProps = (state) => ({

    auth: state.auth || {},
});

const mapDispatchToProps = {
    SignOut,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(NavBar));
