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
import AboutUs from "../Page/AboutUs";
import Contact from "../Page/Contact";
import TermsAndConditions from "../Page/TermsCondition";
import PrivateRoute from "./PrivateRoute";


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
            },
            {
                path:'aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'contact',
                element:<Contact></Contact>
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
                element:<PrivateRoute>
                    <AdminRoute>
                    <AddCamp></AddCamp>
                </AdminRoute>
                </PrivateRoute>
            },
            {
                path:'manageCamp',
                element:<PrivateRoute>
                    <AdminRoute>
                    <ManageCamp></ManageCamp>
                </AdminRoute>
                </PrivateRoute>
            },
            {
                path:'updateCamp/:id',
                element:<PrivateRoute>
                    <AdminRoute>
                    <UpdateCamp></UpdateCamp>
                </AdminRoute>
                </PrivateRoute>
            },
            {
                path:'termsAndCondition',
                element:<TermsAndConditions></TermsAndConditions>
            },
            {
                path:'manage-register-camp',
                element:<PrivateRoute>
                    <AdminRoute>
                    <ManageRegisterCamp></ManageRegisterCamp>
                </AdminRoute>
                </PrivateRoute>
            },
            {
                path:'Profile',
                element:
                   <PrivateRoute>
                     <Profile></Profile>
                   </PrivateRoute>
                
            },
            {
                path:'analytics',
                element:<PrivateRoute>
                    <Analytics></Analytics>
                </PrivateRoute>
            },
            {
                path:'register-camp',
                element:<PrivateRoute>
                    <RegisterCampUser></RegisterCampUser>
                </PrivateRoute>
            },
            {
                path:'payment/:id',
                element:<PrivateRoute>
                    <Payment></Payment>
                </PrivateRoute>
            },
            {
                path:'payment-history',
                element:<PrivateRoute>
                    <PaymentHistory></PaymentHistory>
                </PrivateRoute>
            }
        ])
    }
])

export default router;