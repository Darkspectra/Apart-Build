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
          element: <UserProfile></UserProfile>
        },
        {
          path: 'announcement',
          element: <ViewAnnouncement></ViewAnnouncement>
        },


        // Member dashboard
        {
          path: 'memberProfile',
          element: <MemberProfile></MemberProfile>
        },
        {
          path: 'makePayment',
          element: <MakePayment></MakePayment>
        },
        {
          path: 'stripePage',
          element: <StripePage></StripePage>

        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },

        // Admin dashboard

        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'makeAnnouncement',
          element: <Announcement></Announcement>
        },
        {
          path: 'manageMembers',
          element: <ManageMember></ManageMember>
        },
        {
          path: 'agreementRequest',
          element: <AgreementRequest></AgreementRequest>
        }

      ]
    }
  ]);