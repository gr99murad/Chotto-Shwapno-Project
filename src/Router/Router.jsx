import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayouts/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import OurCampaigns from "../Pages/OurCampaigns";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import SafeNow from "../Pages/SafeNow";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/aboutUs",
    element: <AboutUs></AboutUs>,
  },
  {
    path: "/campaign",
    element: <OurCampaigns></OurCampaigns>,
  },
  {
    path: "/safeNow",
    element: <SafeNow></SafeNow>,
  },
  {
    path: "/auth/login",
    element: <Login></Login>,
  },
  {
    path: "/auth/register",
    element: <Register></Register>,
  },
]);

export default router;