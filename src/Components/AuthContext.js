import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adminLoggedIn, setAdminLoggedIn] = useState(() => {
    const isLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';
    return isLoggedIn;
  });
  const [email, setEmail] = useState(() => {
    return sessionStorage.getItem('adminEmail') || '';
  });

  const [projectLoggedIn, setProjectLoggedIn] = useState(() => {
    const isLoggedIn = sessionStorage.getItem('isProjectLoggedIn') === 'true';
    return isLoggedIn;
  });
  const [studentId, setStudentId] = useState(() => {
    return sessionStorage.getItem('studentid') || '';
  });

  useEffect(() => {
    sessionStorage.setItem('isAdminLoggedIn', adminLoggedIn);
    sessionStorage.setItem('adminEmail', email);
    sessionStorage.setItem('isProjectLoggedIn', projectLoggedIn);
    sessionStorage.setItem('studentid', studentId);
  }, [adminLoggedIn, email, projectLoggedIn, studentId]);

  const handleLogin = (email) => {
    sessionStorage.setItem('isAdminLoggedIn', true);
    sessionStorage.setItem('adminEmail', email);
    setAdminLoggedIn(true);
    setEmail(email);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    sessionStorage.removeItem('adminEmail');
    setAdminLoggedIn(false);
    setEmail('');
  };

  
  const handleprojectLogin = (studentId) => {
    sessionStorage.setItem('isProjectLoggedIn', true);
    sessionStorage.setItem('studentid', studentId);
    setProjectLoggedIn(true);
    setStudentId(studentId);
  };

  const handleprojectLogout = () => {
    sessionStorage.removeItem('isProjectLoggedIn');
    sessionStorage.removeItem('studentid');
    setProjectLoggedIn(false);
    setStudentId('');
  };

  return (
    <AuthContext.Provider value={{ adminLoggedIn, email, handleLogin, handleLogout, projectLoggedIn, studentId, handleprojectLogin, handleprojectLogout  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
