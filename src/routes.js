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
        exact: false,
        component: lazy(() => import("./views/MoviesDetails"))
    },
    {   
        label: "Not Found",        
        component: lazy(() => import("./views/NotFound"))
    },
]

export default routes;