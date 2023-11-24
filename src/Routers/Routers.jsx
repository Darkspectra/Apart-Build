import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutPage from "../Pages/Home/About/AboutPage";
import Apartment from "../Pages/Apartment/Apartment";


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
        }
      ]
    },
  ]);