import Home from "../Home/Home";


// import SignUp
import SignUp from '../SignUp/SignUp'

// import sign in 
import Login from '../Login/Login'





let indexRoutes = [

    {
        path: "/home",
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
        path: "/",
        name: "Login",
        component: Login,
        exact: true,
    },
    {
        path: "/*",
        name: "Login",
        component: Login,
      },

];

export default indexRoutes;
