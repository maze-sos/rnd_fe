import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Footer.css';
import { useAuth } from './AuthContext'; 

const MainFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <img src={require('./logo.jpg')} alt="logo" height="50px" width="150px" />
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@lincoln.edu.ng</p>
            <p>Phone: +2348038341496</p>
          </div>
          <div className="footer-section">
            <h3>Pages</h3>
            <ul className="links">
              <li><Link className='foot-text-link' to="/">Home</Link></li>
              <li><Link className='foot-text-link' to="/researchareas">Research Areas</Link></li>
              <li><Link className='foot-text-link' to="/projectlist">Projects</Link></li>
              <li><Link className='foot-text-link' to="/membership">Membership</Link></li>
              <li><Link className='foot-text-link' to="/internship">Internship</Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        &copy; <strong>Copyright 2024 Lincoln College and University Nigeria  - All Rights Reserved.</strong>
      </div>
    </>
  );
};

const DashFooter = () => {
  return (
    <div className="footer-bottom">
      &copy; <strong>Copyright 2024 Lincoln College and University Nigeria  - All Rights Reserved.</strong>
    </div>
  );
};

function Footer() {
  const { adminLoggedIn, projectLoggedIn } = useAuth();

  return (
    <div>
      {adminLoggedIn || projectLoggedIn ? <DashFooter /> : <MainFooter />}
    </div>
  );
}

export default Footer;
