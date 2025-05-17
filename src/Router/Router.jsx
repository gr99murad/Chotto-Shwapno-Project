import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayouts/MainLayout";
import Home from "../Pages/Home";

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
    path: "/about",
    element: <div>About Page</div>,
  },
]);

export default router;