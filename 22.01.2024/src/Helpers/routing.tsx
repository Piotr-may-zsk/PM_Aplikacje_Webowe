import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

interface RouteItem {
    path: string
    element: React.JSX.Element
    label: string
    exact?: boolean
}


// export const routes:  Array<RouteItem> = []
export const routes: RouteItem[] = [
    {
        path: "/",
        element: <Home />,
        label: "Home",
        exact: true,
    },
    {
        path: "/about",
        element: <About />,
        label: "About"
    },
    {
        path: "/contact",
        element: <Contact />,
        label: "Contact"
    }
]