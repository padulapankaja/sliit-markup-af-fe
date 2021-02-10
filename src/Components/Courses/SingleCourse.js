import React, { Component } from 'react';
import NavBar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import './course.css'
import { insert_course, get_single_course_details } from '../Controller/Course.controller'
class Courses extends Component {
    constructor() {
        super();
        this.state = {
            course: []
        };



    }

    componentDidMount() {

        this.get_single()
    }

    get_single = () => {
        get_single_course_details(this.props.match.params.id).then(result => {
            // console.log(result.data.data);
            this.setState({
                course: result.data.data
            })
            console.log(this.state.course);
        }).catch(err => {
            console.log(err.response);

        })
    }

    // render_course = (course) => {
    //     return (<div class="row">
    //         <div class="col-md-6">
    //             <div class="why_img-container">
    //                 <img src={`${course.img}`} alt="" />
    //             </div>
    //         </div>
    //         <div class="col-md-6">
    //             <div class="why_detail-box">
    //                 <h3>
    //                     {course.title}
    //                 </h3>
    //                 <p>
    //                     {course.description}
    //                 </p>
    //                 <div class="">
    //                     <a class="call_to-btn btn_white-border">
    //                         {course.noOfStudents}
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>)
    // }
    render() {
        const { course } = this.state
        return (
            <div>
                <NavBar />
                <div class="common_style">
                    <section class="why_section">
                        <div class="container">
                            {/* {course && course.map((course) =>
                                    this.render_course(course)
                                )} */}
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="why_img-container">
                                        <img src={`${course.img}`} alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="why_detail-box">
                                        <h3>
                                            {course.title}
                                        </h3>
                                        <p>
                                            {course.description}
                                        </p>
                                        <p>
                                            No of Students : {course.noOfStudents}
                                        </p>
                                        <div class="">
                                            <a class="call_to-btn btn_white-border">
                                                Add To My Collection
                                            </a>
                                        </div>
                                    </div>
                                </div>
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