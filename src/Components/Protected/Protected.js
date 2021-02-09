import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


class Protected extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div>
 <h3>Protected</h3>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth || {},
  });

export default connect(mapStateToProps)(withRouter(Protected));

