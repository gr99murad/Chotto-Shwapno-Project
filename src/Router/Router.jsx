import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayouts/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import OurCampaigns from "../Pages/OurCampaigns";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import SafeNow from "../Pages/SafeNow";
import Police from "../Pages/EmergencyContacts/Police";
import Ambulance from "../Pages/EmergencyContacts/Ambulance";
import FireService from "../Pages/EmergencyContacts/FireService";
import NotFound from "../Pages/NotFound";
import CampaignBlog from "../Components/Campaign_Blog/CampaignBlog";
import SubCategories from "../Components/Sub_Categories/SubCategories";


const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/campaign",
    element: <OurCampaigns />,
  },
  {
    path: "/campaign/:id",
    element: <CampaignBlog />,
  },
  {
    path: "/safeNow",
    element: <SafeNow />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/safeNow/police",
    element: <Police />,
  },
  {
    path: "/safeNow/ambulance",
    element: <Ambulance />,
  },
  {
    path: "/safeNow/fire-service",
    element: <FireService />,
  },

  {
    path: "/category/:id",
    element: <SubCategories></SubCategories>,
  },
]);

export default router;
