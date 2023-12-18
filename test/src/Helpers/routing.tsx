import React from "react";
import Homepage from "../pages/Homepage";
import About from "../pages/About";

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
        element: <Homepage />,
        label: "Homepage",
        exact: true,
    },
    {
        path: "/about",
        element: <About />,
        label: "About"
    }
]