import React, { Component } from 'react';
import SideBar from '../Teachers/SideBar'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenAlt, faEye, faEnvelope, faBan } from '@fortawesome/free-solid-svg-icons'
import { Line as LineChart, Bar, Doughnut } from 'react-chartjs-2';

class MyCourses extends Component {
    constructor() {
        super();
        this.state = {

        };



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
                                    My Courses
                                    </h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}





const cardstyle = "card border-0 shadow-sm rounded mt-2 bg-white py-2 d-flex flex-row"
const options1 = {
    scaleShowGridLines: false,
    scaleGridLineColor: 'rgba(0,0,0,.05)',
    scaleGridLineWidth: 0,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero: true,
                precision: 0,
            }
        }]
    }
}

const options2 = {
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            }
        }]
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth || {},
});
export default connect(mapStateToProps, null)(withRouter(MyCourses));

