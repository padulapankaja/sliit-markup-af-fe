
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import indexRoutes from './Components/Routes/index'
import protectedRoutes from './Components/Routes/regitered_router'
import studentRoutes from './Components/Routes/student_router'
// import adminRoutes from './routes/adminroutes'
// import loginUserRoutes from './routes/loginUser'
// import managerRoutes from './routes/manager.routes'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure() 


class App extends React.Component {

    router = () => {
        let routes = indexRoutes;

        let checkSignedIn = this.props.auth.isAuthenticated;
        let role = ""
        if(checkSignedIn){
            role = this.props.auth.user.data.user_details.role;
        }


        if (checkSignedIn == true) {
            routes = [ ...routes];
        }

        if(checkSignedIn == true && role == "teacher"){
         routes = [ ...protectedRoutes, ...routes ];
        }

        if(checkSignedIn == true && role == "student"){
         routes = [ ...studentRoutes, ...routes ];
        }

        // if( checkSignedIn == true && role == "admin" ){
        //   routes = [ ...adminRoutes ,...managerRoutes, ...routes ];
        // }
        console.log(role);
        console.log(routes);
        return routes;
    }

    render() {
        return (
            <Router >
                <Switch>
                    {this.router().map((prop, key) => {
                        return (
                            <Route
                                path={prop.path}
                                key={key}
                                component={(props) => <prop.component    {...props} />}
                                exact={prop.exact ? true : false}

                            />
                        );
                    })}
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth || {},
});

export default connect(mapStateToProps)(App);