import React, { Component } from 'react';
import { signin } from '../Controller/User.controller'
import './Login.css'

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

    render() {
        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input type="text" className="form-control" placeholder="User Name" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-black mr-1">Login</button>
                                <button type="submit" className="btn btn-secondary ml-2">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Login;