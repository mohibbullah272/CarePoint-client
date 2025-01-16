import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home/Home";
import AvailableCamp from "../Page/AvailableCamp/AvailableCamp";
import JoinUs from "../Page/JoinUs";
import Signup from "../Page/Signup";
import Dashboard from "../Layout/Dashboard/Dashboard";


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
                path:'signup',
                element:<Signup></Signup>
            }
        ])
    },
    {
        path:"/Dashboard",
        element:<Dashboard></Dashboard>
    }
])

export default router;