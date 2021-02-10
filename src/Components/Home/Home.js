import React, { Component } from 'react';
import './home.css'
import NavBar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import Content from './Content'
import hero from '../img/hero.png'
import about from '../img/about.png'
import admission from '../img/admission.png'
import why from '../img/why.png'
import determine from '../img/determine.png'
import { withRouter } from "react-router-dom";

import { register_as_student, register_as_teacher, setToast, setErrorToast } from '../Controller/User.controller'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }
    formValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    RegsiterStudent = async (e) => {
        e.preventDefault()

        register_as_student(this.state.name, this.state.email, this.state.password).then(result => {
            setToast("Successfully Created")
            this.clear()
            this.props.history.push("/login");
        }).catch(err => {
            console.log(err.response);
            if (err.response.status == 406) {
                setErrorToast("User already exists")
                this.clear()
                // this.props.history.push("/login");
            } else if (err.response.status == 422) {
                setErrorToast("Please sent valid data")
                this.clear()
            }
        })
    }
    RegsiterTeacher = async (e) => {
        e.preventDefault()
        register_as_teacher(this.state.name, this.state.email, this.state.password).then(result => {
            setToast("Successfully Created")
            this.clear()
            this.props.history.push("/login");
        }).catch(err => {
            console.log(err.response);
            if (err.response.status == 406) {
                setErrorToast("User already exists")
                this.clear()
                // this.props.history.push("/login");
            } else if (err.response.status == 422) {
                setErrorToast("Please sent valid data")
                this.clear()
            }
        })


    }

    clear = () => {
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }
    render() {
        return (
            <div>

                <NavBar />


            <Content/>
         

                <section class="contact_section ">

                    <div class="container" id="register-section">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="d-flex justify-content-center d-md-block">
                                    <h2>
                                        Register
        </h2>
                                </div>
                                <form action="">
                                    <div class="contact_form-container">
                                        <div>
                                            <div>
                                                <input type="text" placeholder="Name" value={this.state.name} name="name" onChange={(e) => this.formValueChange(e)} required />
                                            </div>
                                            <div>
                                                <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={(e) => this.formValueChange(e)} required />
                                            </div>
                                            <div>
                                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.formValueChange(e)} required />
                                            </div>
                                            <div class="mt-5">
                                                <button className="mb-1 mr-1" onClick={(e) => this.RegsiterStudent(e)}>
                                                    Student
              </button>
                                                <button onClick={(e) => this.RegsiterTeacher(e)}>
                                                    Teacher
              </button>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>
                            <div class="col-md-6">
                                <div class="contact_img-box">
                                    <img src="images/students.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}


export default withRouter(Home);
