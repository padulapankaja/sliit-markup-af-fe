import React from "react";
import "./sidebar.css";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { SignOut } from "../Redux/Action/authAction";

import {
    faUser,
    faEnvelopeSquare,
    faBars,
    faTags,
    faBarcode,
    faClipboardCheck,
    faGift,
    faPlusSquare,
    faTachometerAlt,
    faComment,
    faHome,
    faUserSecret,
    faUsers,
    faSuitcase,
    faSignOutAlt,
    faIgloo,
    faTimes,
    faSitemap,
    faPlus,
    faSort,
    faHourglassHalf,
    faCheck,
    faUserPlus,
    faTruck,
    faThList
} from "@fortawesome/free-solid-svg-icons";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            side_bar_toggle: false,
            addSuplierState: false,
        };
    }

    signoutuser = () => {

        const role = this.props.auth.user.data.user_details.role;
        let isTeacher = false
        if (role == "teacher") {
            isTeacher = true
        }
        this.props.SignOut && this.props.SignOut();
        this.props.history.push(isTeacher ? "/" : "/");
    };

    change_toggle = () => {
        if (this.state.addSuplierState) {
            this.setState({ addSuplierState: false })
        } else {
            this.setState({ addSuplierState: true })
        }
    }

    render() {
        const { side_bar_toggle } = this.state;
        // const { active } = 'dashboard';
        const { active } = this.props;
        const role = this.props.auth.user.data.user_details.role;
        let isTeacher = false
        var role_name = "";
        if (role == "teacher")
           {
            role_name = "Teacher"
            isTeacher = true
           }
        else if (role == "student")
            role_name = "Student"
        console.log("Users role", role);


        return (
            <>
            
                <nav className="navbar navbar-dark bg-dark py-0 shadow-sm  fixed-top">
                    <span className="navbar-brand mb-0 h6 text-light ml-2">Dashboard
                         <FontAwesomeIcon onClick={() => this.setState({ side_bar_toggle: !this.state.side_bar_toggle })} icon={faBars} className="ml-4 click show-icon"></FontAwesomeIcon> </span>
                </nav>
                <div className={`sidebar_wrap sidebar-top ${side_bar_toggle ? 'sidebar_active' : ''}`}>
                    <div className="sidebar-header pb-4 pt-2">
                        <div className="d-flex px-4">
                            <img src="https://www.iconfinder.com/data/icons/user-pictures/100/male3-512.png" className="rounded-circle sidebar-image my-auto"></img>
                            <div className="my-auto">
                                <h6 style={{ lineHeight: '12px', fontWeight: 600 }}
                                    className={`text-white mb-0 mt-1`}>
                                    {role_name}
                                </h6>
                                <span className="small text-light ">
                                    {this.props.auth.user.data.user_details.email}
                                </span>
                            </div>
                        </div>
                    </div>
                    <ul className="sidebar">
                        {isTeacher == true ?
                            <li className="listitem" className={`listitem ${active == 'dashboard' && 'active_category'}`}>
                                <Link to="/dashboard">
                                    <h6 className={`dd categorylink px-2 ${active == 'dashboard' && 'active_category'}`}>
                                        <FontAwesomeIcon icon={faTachometerAlt} className="mx-3 sidebar-icon"></FontAwesomeIcon>Dashboard
                             </h6></Link>
                            </li>

                            : ''}
                        {isTeacher == true ?
                            <li className="listitem" className={`listitem ${active == 'sitemanagers' && 'active_category'}`}>
                                <Link to="/add_courses">
                                    <h6 className={`dd categorylink px-2 ${active == 'sitemanagers' && 'active_category'}`}>
                                        <FontAwesomeIcon icon={faUser} className="mx-3 sidebar-icon"></FontAwesomeIcon>Add Courses
                                </h6></Link>
                            </li>
                            : ''}
                        {isTeacher == true ?
                            <Link to="/admin/createUser">
                                <li className={`listitem ${active == 'CreateUser' && 'active_category'}`}>
                                    <h6 className={`dd categorylink px-2 ${active == 'CreateUser' && 'active_category'}`}>
                                        <FontAwesomeIcon icon={faUserPlus} className="mx-3 sidebar-icon"></FontAwesomeIcon>Edit Courses
                                </h6>
                                </li>
                            </Link> : ''
                        }
                        {isTeacher != true ?
                            <Link to="/admin/suppliers">
                                <li className={`listitem ${active == 'suppliers' && 'active_category'}`}>
                                    <h6 className={`dd categorylink px-2 ${active == 'suppliers' && 'active_category'}`}>
                                        <FontAwesomeIcon icon={faTruck} className="mx-3 sidebar-icon"></FontAwesomeIcon>My Courses
                                </h6>
                                </li>
                            </Link>
                            : ''}

                        <li onClick={() => this.signoutuser()} className={`listitem click`}>
                            <h6 className={`dd categorylink px-2 `} style={{ fontSize: '98%' }}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="mx-3 sidebar-icon"></FontAwesomeIcon>Logout
                             </h6>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth || {},
});

const mapDispatchToProps = {
    SignOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideBar));
