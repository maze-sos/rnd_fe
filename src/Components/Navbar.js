import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/NavBar.css';
import { useAuth } from './AuthContext'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { adminLoggedIn, handleLogout } = useAuth();
  const { projectLoggedIn, handleprojectLogout } = useAuth(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const onAdminLogout = () => {
    handleLogout();
    closeMenu();
    navigate('/login/adminlogin');
  };

  const onProjectLogout = () => {
    handleprojectLogout(); 
    closeMenu();
    navigate('/login/projectlogin'); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav ref={menuRef}>
      <div className='logo'>
        <img src={require('./logo.jpg')} alt="logo" height="50px" width="150px" />
      </div>

      <div className='burger-button' onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {adminLoggedIn ? (
          <li>
            <button className='new-button' onClick={onAdminLogout}>Admin Logout</button>
          </li>
        ) : projectLoggedIn ? (
          <li>
            <button className='new-button' onClick={onProjectLogout}>Project Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link className='nav-text-link' to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link className='nav-text-link' to="/researchareas" onClick={closeMenu}>Research Areas</Link>
            </li>
            <li>
              <Link className='nav-text-link' to="/projectlist" onClick={closeMenu}>Student Projects</Link>
            </li>
            <li>
              <Link className='nav-text-link' to="/membership" onClick={closeMenu}>Membership</Link>
              <ul className="menu-dropdown">
                <li>
                  <Link className='nav-text-link' to="/membership/staffmembership" onClick={closeMenu}>Staff Membership</Link>
                </li>
                <li>
                  <Link className='nav-text-link' to="/membership/studentmembership" onClick={closeMenu}>Student Membership</Link>
                </li>
                <li>
                  <Link className='nav-text-link' to="/membership/externalmembership" onClick={closeMenu}>External Membership</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='nav-text-link' to="/internship" onClick={closeMenu}>Internship</Link>
              <ul className="menu-dropdown">
                <li>
                  <Link className='nav-text-link' to="/internship/internalinternship" onClick={closeMenu}>Internal Internship</Link>
                </li>
                <li>
                  <Link className='nav-text-link' to="/internship/externalinternship" onClick={closeMenu}>External Internship</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className='nav-text-link' to="/login" onClick={closeMenu}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
