import React from "react";
import Users from "../pages/Users";

interface RouteItem {
    path: string
    element: React.JSX.Element
    label: string
}

export const routes: RouteItem[] = [
    {
        path: "/users",
        element: <Users />,
        label: "Users",
    }
]