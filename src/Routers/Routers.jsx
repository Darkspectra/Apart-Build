import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutPage from "../Pages/Home/About/AboutPage";
import Apartment from "../Pages/Apartment/Apartment";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import Announcement from "../Pages/Dashboard/Announcement/Announcement";
import ViewAnnouncement from "../Pages/Dashboard/ViewAnnouncement/ViewAnnouncement";
import ManageMember from "../Pages/Dashboard/ManageMember/ManageMember";
import AgreementRequest from "../Pages/Dashboard/AgreementRequest/AgreementRequest";
import MemberProfile from "../Pages/Dashboard/MemberProfile/MemberProfile";
import MakePayment from "../Pages/Dashboard/MakePayment/MakePayment";
import StripePage from "../Pages/StripePage/StripePage";
import PaymentHistory from "../Pages/Dashboard/MakePayment/PaymentHistory";
import ManageCoupons from "../Pages/Dashboard/ManageCoupons/ManageCoupons";
import CouponForm from "../Pages/Dashboard/ManageCoupons/CouponForm";
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
         path: "/",
         element: <Home></Home>,
        },
        {
            path: "about",
            element: <AboutPage></AboutPage>
        },
        {
          path: "apartment",
          element: <Apartment></Apartment>
        },
        {
          path: "signup",
          element: <SignUp></SignUp>
        },
        {
          path: "login",
          element: <Login></Login>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'userProfile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute> 
        },
        {
          path: 'announcement',
          element: <PrivateRoute><ViewAnnouncement></ViewAnnouncement></PrivateRoute> 
        },


        // Member dashboard
        {
          path: 'memberProfile',
          element: <PrivateRoute><MemberProfile></MemberProfile></PrivateRoute> 
        },
        {
          path: 'Payment',
          element: <PrivateRoute><MakePayment></MakePayment></PrivateRoute> 
        },
        {
          path: 'stripePage',
          element: <PrivateRoute><StripePage></StripePage></PrivateRoute> 

        },
        {
          path: 'paymentHistory',
          element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute> 
        },

        // Admin dashboard

        {
          path: 'adminProfile',
          element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute> 
        },
        {
          path: 'makeAnnouncement',
          element: <PrivateRoute><Announcement></Announcement></PrivateRoute> 
        },
        {
          path: 'manageMembers',
          element: <PrivateRoute><ManageMember></ManageMember></PrivateRoute> 
        },
        {
          path: 'agreementRequest',
          element: <PrivateRoute><AgreementRequest></AgreementRequest></PrivateRoute> 
        },
        {
          path: 'manageCoupons',
          element: <PrivateRoute><ManageCoupons></ManageCoupons></PrivateRoute> 
        },
        {
          path: 'couponForm',
          element: <PrivateRoute><CouponForm></CouponForm></PrivateRoute> 
        }

      ]
    }
  ]);