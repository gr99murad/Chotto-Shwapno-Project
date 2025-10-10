import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import './index.css'
import ToastProvider from './SharedFile/ToastProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider></ToastProvider>
    <RouterProvider router={router} />
    
  </StrictMode>
)
