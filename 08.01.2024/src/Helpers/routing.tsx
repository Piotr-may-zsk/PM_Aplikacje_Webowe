import React from "react";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";

interface RouteItem {
    path: string
    element: React.JSX.Element
    label: string
    hideInMenu?: boolean
}


// export const routes:  Array<RouteItem> = []
export const routes: RouteItem[] = [
    {
        path: "/",
        element: <Homepage />,
        label: "Homepage"
    },
    {
        path: "/about",
        element: <About />,
        label: "About"
    },
    {
        path: "/blog",
        element: <Blog />,
        label: "Blog"
    },
    {
        path: "/blog/:id",
        element: <BlogPost />,
        label: "BlogPost",
        hideInMenu: true
    }
]