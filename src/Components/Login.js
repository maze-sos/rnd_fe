import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Lincoln.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Login</h1>
      </div>
    </div>
  );
};

const Options = () => {
  return (
    <div className="flex-container">
        <Link to="/login/projectsignup" className="link-flex-box">
            <h3 className="link-flex-box-text">PROJECT<br />
            SIGNUP</h3>
            <i className="fa fa-user-plus fa-5x" aria-hidden="true"></i>
            
            <p>Click to Signup <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
        </Link>
        <Link to="/login/projectlogin" className="link-flex-box">
            <h3 className="link-flex-box-text">PROJECT<br />
            LOGIN</h3>
            <i className="fa fa-user-plus fa-5x" aria-hidden="true"></i>
        
            <p>Click to Login <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
        </Link>
      
        {/* <Link to="/login/adminlogin" className="link-flex-box">
            <h3 className="link-flex-box-text">ADMIN<br />
            LOGIN</h3>
            <i className="fa fa-user-plus fa-5x" aria-hidden="true"></i>
                
            <p>Admin Login <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
        </Link> */}
    </div>
  );
};

function Login() {
    return (
        <div>
        <Hero />
        <Options />  
      </div>
    )
}
  
export default Login;