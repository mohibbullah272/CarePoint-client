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
import PaymentHistory from "../Page/DashboardPage/PaymentHistory";
import AdminRoute from "./AdminRoute";
import Profile from "../Page/DashboardPage/Profile";
import Analytics from "../Page/DashboardPage/Analytics";
import NotFound from "../Page/NotFound";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<NotFound></NotFound>,
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
        errorElement:<NotFound></NotFound>,
        children:([
            // admin route
            {
                path:'addCamp',
                element:<AdminRoute>
                    <AddCamp></AddCamp>
                </AdminRoute>
            },
            {
                path:'manageCamp',
                element:<AdminRoute>
                    <ManageCamp></ManageCamp>
                </AdminRoute>
            },
            {
                path:'updateCamp/:id',
                element:<AdminRoute>
                    <UpdateCamp></UpdateCamp>
                </AdminRoute>
            },
            {
                path:'manage-register-camp',
                element:<AdminRoute>
                    <ManageRegisterCamp></ManageRegisterCamp>
                </AdminRoute>
            },
            {
                path:'Profile',
                element:
                    <Profile></Profile>
                
            },
            {
                path:'analytics',
                element:<Analytics></Analytics>
            },
            {
                path:'register-camp',
                element:<RegisterCampUser></RegisterCampUser>
            },
            {
                path:'payment/:id',
                element:<Payment></Payment>
            },
            {
                path:'payment-history',
                element:<PaymentHistory></PaymentHistory>
            }
        ])
    }
])

export default router;