import Protected from "../Protected/Protected";
import ViewStat from "../Teachers/ViewStatistic";
import AddCourses from "../Teachers/AddCourses";
let protectedRoutes = [

    {
        path: "/protected",
        name: "Protected",
        component: Protected,
        exact: true,
    },
    {
        path: "/dashboard",
        name: "ViewStat",
        component: ViewStat,
        exact: true,
    },
    {
        path: "/add_courses",
        name: "AddCourses",
        component: AddCourses,
        exact: true,
    },

];

export default protectedRoutes;
