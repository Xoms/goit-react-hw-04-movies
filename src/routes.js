import { lazy } from "react";


const routes = [
    {   label: "Home",
        path: "/",
        exact: true,
        component: lazy(() => import("./views/Home"))
    },
    {   
        label: "Movies",
        path: "/movies",
        exact: true,
        component: lazy(() => import("./views/Movies"))
    },
    {   
        label: "Details",
        path: "/movies/:movieId",
        exact: true,
        component: lazy(() => import("./views/MoviesDetails"))
    },
    {   
        label: "Not Found",
        path: null,
        exact: true,
        component: lazy(() => import("./views/NotFound"))
    },
]

export default routes;