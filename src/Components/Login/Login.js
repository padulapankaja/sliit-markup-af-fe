import React, { Component } from 'react';
import { signin } from '../Controller/User.controller'
import './Login.css'
import login from '../img/login.jpg'
import { signin_student, signin_teacher, setToast, setErrorToast } from '../Controller/User.controller'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { setCurrentUser } from '../Redux/Action/authAction'
class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };



    }

    formValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    LoginasStudent = async (e) => {
        e.preventDefault()

        signin_student(this.state.email, this.state.password).then(result => {
            this.props.setCurrentUser(result.data);

        }).catch(err => {
            if (err.response.status == 406) {
                setErrorToast("Please sent valid data")
            }
            console.log(err.response);

        })

    }
    LoginasTeacher = async (e) => {
        e.preventDefault()

        signin_teacher(this.state.email, this.state.password).then(result => {
            this.props.setCurrentUser(result.data);

        }).catch(err => {
            if (err.response.status == 406) {
                setErrorToast("Please sent valid data")
            }
            console.log(err.response);

        })

    }
    render() {
        return (
            <div>
                <div className="sidenav">
                    <img src={login} alt="" className="img-fluid" />
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" name="email" className="form-control" value={this.state.email} placeholder="User Name" required onChange={(e) => this.formValueChange(e)} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" className="form-control" value={this.state.password} placeholder="Password" required onChange={(e) => this.formValueChange(e)} />
                                </div>
                                <button className="btn btn-black mr-1 ml-2 mt-2" onClick={(e) => this.LoginasTeacher(e)}>Login as Teacher</button>
                                <button className="btn btn-secondary ml-2 mt-2" onClick={(e) => this.LoginasStudent(e)}>Login as Student</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { setCurrentUser })(withRouter(Login));
