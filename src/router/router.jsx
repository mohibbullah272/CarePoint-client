import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home/Home";
import AvailableCamp from "../Page/AvailableCamp/AvailableCamp";
import JoinUs from "../Page/JoinUs";
import Signin from "../Page/Signin";
import Signup from "../Page/Signup";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'availableCamp',
                element:<AvailableCamp></AvailableCamp>
            },
            {
                path:'joinUs',
                element:<JoinUs></JoinUs>
            },
            {
                path:'login',
                element:<Signin></Signin>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            }
        ])
    }
])

export default router;