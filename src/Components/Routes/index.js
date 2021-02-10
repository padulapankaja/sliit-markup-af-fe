import Home from "../Home/Home";


// import SignUp
import SignUp from '../SignUp/SignUp'

// import sign in 
import Login from '../Login/Login'





let indexRoutes = [

    {
        path: "/",
        name: "Home",
        component: Home,
        exact: true,
    },


    // sign up route
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
        exact: true,
    },
    // sign in route
    {
        path: "/login",
        name: "Login",
        component: Login,
        exact: true,
    },
    {
        path: "/*",
        name: "Home",
        component: Home,
      },

];

export default indexRoutes;
