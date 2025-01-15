import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedProjectRoute = ({ children }) => {
  const { projectLoggedIn } = useAuth();

  return projectLoggedIn ? children : <Navigate to="/login/projectlogin" />;
};

export default ProtectedProjectRoute;
