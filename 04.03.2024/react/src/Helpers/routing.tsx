import React from "react";
import Users from "../pages/Users";
import Images from "../pages/Images";
import AccountData from "../pages/AccountData";
import Events from "../pages/Events";
import Posts from "../pages/Posts";
import {UserForm} from "../pages/UserForm";

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
    },
    {
        path: "/usersform",
        element: <UserForm />,
        label: "User Form",
    },
    {
        path: "/images",
        element: <Images />,
        label: "Images",
    },
    {
        path: "/accountData",
        element: <AccountData />,
        label: "Account Data",
    },
    {
        path: "/events",
        element: <Events />,
        label: "Events",
    },
    {
        path: "/posts",
        element: <Posts />,
        label: "Posts",
    },
]