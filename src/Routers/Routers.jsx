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

        // Admin dashboard

        {
          path: 'adminProfile',
          element: <AdminProfile></AdminProfile>
        },
        {
          path: 'makeAnnouncement',
          element: <Announcement></Announcement>
        }

      ]
    }
  ]);