import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const userRole = localStorage.getItem('userRole');

  if (userRole !== 'Admin') {
    // If not an Admin, redirect to the home page
    return <Navigate to="/" replace />;
  }

  return children;  // Render children (admin panel components)
};

export default AdminRoute;
