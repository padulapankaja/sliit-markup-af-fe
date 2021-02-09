import Protected from "../Protected/Protected";






let protectedRoutes = [

    {
        path: "/protected",
        name: "Protected",
        component: Protected,
        exact: true,
    },

];

export default protectedRoutes;
