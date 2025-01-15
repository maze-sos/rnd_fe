import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { adminLoggedIn } = useAuth();

  return adminLoggedIn ? children : <Navigate to="/login/adminlogin" />;
};

export default ProtectedRoute;
