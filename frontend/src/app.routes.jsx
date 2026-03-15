import { createBrowserRouter } from "react-router"
import Login from "./features/auth/pages/login"
import Register from "./features/auth/pages/register"
//import Feed from "./features/posts/pages/Feed"
//import CreatePost from "./features/posts/pages/CreatePost"


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/',
        element: <h1>welcome to 4 layer architecture</h1>
    }
// {
//     path: '/',
//   element: <Feed />
//  },
//   {
//     path: "/create-post",
//   element: <CreatePost />
//  }
])