import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router"; 
import App  from "../App";
import Login from "../pages/Login";
import Post from "../pages/Post";


const guestRouter = createBrowserRouter([
    {path : '/', element : <Login />}, 
    {path : '/mainpost', element : <p>Post</p>}, 
    {path : '/login', element : <p>Login</p>}, 
    {path : '/register', element : <p>Register</p>}, 
    {path : '/profile', element : <p>Profile</p>}, 
    {path : '/favourite', element : <p>Favourite</p>}, 
    {path : '*', element : <Navigate to = '/' />}
])

const influencerRouter = createBrowserRouter([
    { path : '/', element : <App />, 
    children :[
        {path : '', element: <p>Sidebar + Posts</p>},
        {path : 'post', element: <Post />},
        {path : '*', element: <Navigate to = '/' />},
    ]

    }, 
])

const adminRouter = createBrowserRouter([
    {path : '/', element : <p>Main</p>}, 
    {path : '/mainpost', element : <p>Post</p>}, 
    {path : '/login', element : <p>Login</p>}, 
    {path : '/approveStatus', element : <p>Login</p>}, 
    {path : '*', element : <Navigate to = '/' />}
])

export default function AppRouter(){
    const user = null
    const finalRouter = user ? influencerRouter : guestRouter
    return (
        <RouterProvider router={finalRouter} />
    )
}