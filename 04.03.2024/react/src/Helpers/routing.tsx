import React from "react";
import Users from "../pages/Users";
import Images from "../pages/Images";
import AccountData from "../pages/AccountData";
import Events from "../pages/Events";
import Posts from "../pages/Posts";
import UserForm from "../pages/UserForm";
import AccountDataForm from "../pages/AccountDataForm";
import ImageDataForm from "../pages/ImageForm";
import EventForm from "../pages/EventForm";
import PostForm from "../pages/PostForm";

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
        path: "/usersForm",
        element: <UserForm />,
        label: "User Form",
    },
    {
        path: "/images",
        element: <Images />,
        label: "Images",
    },
    {
        path: "/imageForm",
        element: <ImageDataForm />,
        label: "Image Form",
    },
    {
        path: "/accountData",
        element: <AccountData />,
        label: "Account Data",
    },
    {
        path: "/accountDataForm",
        element: <AccountDataForm />,
        label: "Account Data Form",
    },
    {
        path: "/events",
        element: <Events />,
        label: "Events",
    },
    {
        path: "/eventForm",
        element: <EventForm />,
        label: "Event form",
    },
    {
        path: "/posts",
        element: <Posts />,
        label: "Posts",
    },
    {
        path: "/postForm",
        element: <PostForm />,
        label: "Post Form",
    }
]