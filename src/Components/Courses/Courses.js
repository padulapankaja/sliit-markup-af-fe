import React, { Component } from 'react';
import NavBar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import './course.css'
import { Link } from "react-router-dom";
import { insert_course, get_all_courses } from '../Controller/Course.controller'
class Courses extends Component {
    constructor() {
        super();
        this.state = {
            all_courses: []
        };



    }

    componentDidMount() {
        this.get_all_courses_function()
    }

    get_all_courses_function = () => {
        get_all_courses().then(result => {
            console.log(result.data.data);
            this.setState({
                all_courses: result.data.data
            })
        }).catch(err => {
            console.log(err.response);

        })
    }

    display_all_courses = (course) => {
        return (
            <div key={course._id} className="col-md-6 mt-3">
                <div className="card booking-card" style={{ textAlign: 'left' }}>
                    <div className="view overlay">
                        <img className="card-img-top" src={`${course.img}`} alt="Card image cap" />
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title font-weight-bold">{course.title}</h4>
                        <hr className="my-2" />

                        <p className="m-0"> • No Of Student : {course.noOfStudents}</p>
                        <p className="card-text">{course.description}</p>
                        <Link
                            to={`/courses/${course._id}`}
                            className="btn btn-flat deep-purple-text p-1 mx-0 mb-0"
                        > View More </Link>
                    </div>

                </div>
            </div>
        );
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="common_style">

                    <section className="why_section">
                        <div className="container">
                            <div className="row">
                                {this.state.all_courses && this.state.all_courses.map((course) =>
                                    this.display_all_courses(course)
                                )}
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Courses;