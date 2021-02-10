import React, { Component } from 'react';
import SideBar from '../Teachers/SideBar'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { get_courses_by_teacher, insert_course } from '../Controller/Course.controller'
import { setToast, setErrorToast } from '../Controller/User.controller'
import moment from 'moment'
class AddCourses extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            img: '',
            description: '',
            link: '',
            content: '',
            teacher_id: '',
            all_courses: []
        };
    }
    formValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = async (e) => {
        e.preventDefault()


        insert_course(this.state.title,
            this.state.img,
            this.state.description,
            this.state.link,
            this.state.content,
            this.props.auth.user.data.user_details._id).then(result => {
                setToast("Successfully Added")
                this.get_teacher_wise_courses_fun()
                this.setState({
                    img: '',
                    description: '',
                    link: '',
                    content: ''
                })
            }).catch(err => {
                console.log(err);
                console.log(err.response);
                setErrorToast("Someting went wrong")
            })


    }
    componentDidMount() {
        this.get_teacher_wise_courses_fun()
    }
    get_teacher_wise_courses_fun = () => {
        console.log(this.props.auth.user.data.user_details._id);
        get_courses_by_teacher(this.props.auth.user.data.user_details._id).then(result => {
            this.setState({
                all_courses: result.data.data
            })
        }).catch(err => {
            console.log(err.response);

        })
    }
    display_all_courses = (course) => {
        return (
            <tr key={course._id}>
                <td>{course.title}</td>
                <td>{moment(course.createdAt).format("DD MM YYYY")}</td>
                <td>{course.noOfStudents}</td>
                <td><a href={`/courses/${course._id}`} className="btn btn-primary" style={{ color: 'white' }}> View  </a> </td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <SideBar />
                <div className="wrapper-wx mt-3" >
                    <div className="container-fluid" >
                        <div className="row mx-1">
                            <div className="col-12 px-0">
                                <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                    Add Courses
                                    </h6>
                            </div>
                            <div className="col-12" >
                                <div className="card border-0 shadow-sm rounded mt-2 bg-white pb-2">
                                    <form className=" py-2  px-3 additems" onSubmit={(e) => this.onSubmit(e)}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h6 className="form-label mb-2 mt-2">Title *</h6>
                                                <input
                                                    id="title"
                                                    type="text"
                                                    name="title"
                                                    placeholder="Enter Title"
                                                    value={this.state.title}
                                                    className="form-control"
                                                    onChange={(e) => this.formValueChange(e)} required></input>

                                                <h6 className="form-label mb-2 mt-3">Description *</h6>
                                                <input
                                                    id="item_description"
                                                    type="text"
                                                    name="description"
                                                    placeholder="Enter Small Description"
                                                    value={this.state.description}
                                                    className="form-control"
                                                    onChange={(e) => this.formValueChange(e)} required></input>
                                                <h6 className="form-label mb-2 mt-3">Content *</h6>
                                                <input
                                                    id="content"
                                                    type="text"
                                                    name="content"
                                                    placeholder="Enter Content"
                                                    value={this.state.content}
                                                    className="form-control"
                                                    onChange={(e) => this.formValueChange(e)} required></input>
                                            </div>
                                            <div className="col-md-6">
                                                <h6 className="form-label mb-2 mt-2">Image *</h6>
                                                <input
                                                    id="img"
                                                    type="text"
                                                    name="img"
                                                    placeholder="Enter Image Link"
                                                    value={this.state.img}
                                                    className="form-control"
                                                    onChange={(e) => this.formValueChange(e)} required></input>

                                                <h6 className="form-label mb-2 mt-3">Link *</h6>
                                                <input
                                                    id="link"
                                                    type="text"
                                                    name="link"
                                                    placeholder="Enter Course Link"
                                                    value={this.state.link}
                                                    className="form-control"
                                                    onChange={(e) => this.formValueChange(e)} required></input>
                                            </div>
                                            <div className="col-md-12 mt-4">
                                                <div className="d-flex">
                                                    <button type="submit" className="font-weight-bold px-2 btn btn-dark  btn-sm bold-normal"   >
                                                        Add Course
                                                </button>
                                                    <button type="reset" className="font-weight-bold px-2 ml-2  btn btn-secondary  btn-sm bold-normal" >
                                                        Cancel
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 px-0">
                                <h6 className="text-dark bold-normal py-3 bg-white shadow-sm px-3 mt-3 rounded">
                                    All My Courses
                                    </h6>
                            </div>
                            <div className="col-12" >
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Added Date</th>
                                            <th scope="col">#Students</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.state.all_courses && this.state.all_courses.map((course) =>
                                            this.display_all_courses(course)
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth || {},
});
export default connect(mapStateToProps, null)(withRouter(AddCourses));
