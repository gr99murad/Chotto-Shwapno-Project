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
import OurAdvisors from "../Components/Advisors/OurAdvisors";
import AdminPanel from "../AdminPanel/Components/AdminPanel";
import AdminHomePage from "../AdminPanel/Pages/AdminHomePage";
import AdminAboutPage from "../AdminPanel/Pages/AdminAboutPage";
import AdminCampaignPage from "../AdminPanel/Pages/AdminCampaignPage";
import AdminBloodDonorPage from "../AdminPanel/Pages/AdminBloodDonorPage";
import AdminEmergencyPage from "../AdminPanel/Pages/AdminEmergencyPage";
import AdminAdvisorPage from "../AdminPanel/Pages/AdminAdvisorPage";
import Profile from "../Pages/Profile";
import EmergencyInfo from "../Components/EmergencyInfo/EmergencyInfo";
import Doctor from "../Pages/EmergencyContacts/Doctor";
import Hospital from "../Pages/EmergencyContacts/Hospital";
import Lawyer from "../Pages/EmergencyContacts/Lawyer";
import ShoppingMall from "../Pages/EmergencyContacts/ShoppingMall";
import TechShop from "../Pages/EmergencyContacts/TechShop";
import PetShop from "../Pages/EmergencyContacts/PetShop";
import BusTime from "../Pages/EmergencyContacts/BusTime";
import TrainTime from "../Pages/EmergencyContacts/TrainTime";

// Import the AdminRoute component
import AdminRoute from "../AdminPanel/AdminRoute";
import AdminUserManagement from "../AdminPanel/Pages/AdminUserManagement";
import Hostel from "../Pages/EmergencyContacts/Hostel";

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
    path: "/doctor",
    element: <Doctor />,
  },
  {
    path: "/hospital",
    element: <Hospital />,
  },
   {
    path: "/hostel",
    element: <Hostel></Hostel>,
  },
  {
    path: "/lawyer",
    element: <Lawyer />,
  },
  {
    path: "/shoppingMall",
    element: <ShoppingMall />,
  },
  {
    path: "/techShop",
    element: <TechShop />,
  },
  {
    path: "/petShop",
    element: <PetShop />,
  },
  {
    path: "/busTime",
    element: <BusTime />,
  },
  {
    path: "/trainTime",
    element: <TrainTime />,
  },
  {
    path: "/ourAdvisors",
    element: <OurAdvisors />,
  },
  {
    path: "/safeNow/fire-service",
    element: <FireService />,
  },
  {
    path: "/category/:id",
    element: <SubCategories />,
  },
  {
    path: "/admin",
    element: <AdminRoute>  {/* Protect Admin routes */}
      <AdminPanel />
    </AdminRoute>,
    children: [
      {
        path: "/admin/home",
        element: <AdminHomePage />,
      },
      {
        path: "/admin/userManage",
        element: <AdminUserManagement></AdminUserManagement>,
      },
      {
        path: "/admin/campaign",
        element: <AdminCampaignPage />,
      },
      {
        path: "/admin/blood-donor",
        element: <AdminBloodDonorPage />,
      },
      {
        path: "/admin/emergency-numbers",
        element: <AdminEmergencyPage />,
      },
      {
        path: "/admin/our-advisor",
        element: <AdminAdvisorPage />,
      },
    ]
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/emergencyInfo",
    element: <EmergencyInfo />,
  },
]);

export default router;
