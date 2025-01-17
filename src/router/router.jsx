import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home/Home";
import AvailableCamp from "../Page/AvailableCamp/AvailableCamp";
import JoinUs from "../Page/JoinUs";
import Signup from "../Page/Signup";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddCamp from "../Page/DashboardPage/AddCamp";
import ManageCamp from "../Page/DashboardPage/ManageCamp";
import UpdateCamp from "../Page/DashboardPage/UpdateCamp";


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
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:([
            // admin route
            {
                path:'addCamp',
                element:<AddCamp></AddCamp>
            },
            {
                path:'manageCamp',
                element:<ManageCamp></ManageCamp>
            },
            {
                path:'updateCamp/:id',
                element:<UpdateCamp></UpdateCamp>
            }
        ])
    }
])

export default router;