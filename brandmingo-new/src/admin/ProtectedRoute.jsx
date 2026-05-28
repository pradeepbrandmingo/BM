import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  // NOT LOGGED IN
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // LOGGED IN
  return children;
};

export default ProtectedRoute;
