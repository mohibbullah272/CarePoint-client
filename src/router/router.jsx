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
import CampDetails from "../Page/Home/CampDetails";
import axios from "axios";
import RegisterCampUser from "../Page/DashboardPage/RegisterCampUser";
import ManageRegisterCamp from "../Page/DashboardPage/ManageRegisterCamp";
import Payment from "../Page/DashboardPage/Payment";


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
                path:'/camp-details/:id',
                element:<CampDetails></CampDetails>,
             
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
            },
            {
                path:'manage-register-camp',
                element:<ManageRegisterCamp></ManageRegisterCamp>
            },
            // participant route
            {
                path:'register-camp',
                element:<RegisterCampUser></RegisterCampUser>
            },
            {
                path:'payment/:id',
                element:<Payment></Payment>
            }
        ])
    }
])

export default router;