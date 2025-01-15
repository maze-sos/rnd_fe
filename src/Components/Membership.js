import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Lincoln.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>RESEARCH AND DEVELOPMENT MEMBERSHIP</h1>
      </div>
    </div>
  );
};

const Options = () => {
  return (
    <div className="flex-container">
        <Link to="/membership/staffmembership" className="link-flex-box">
            <h3 className="link-flex-box-text">STAFF<br />
            MEMBERSHIP</h3>
            <i className="fa fa-user-plus fa-5x" aria-hidden="true"></i>
            
            <p>Click to Register <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
        </Link>
        <Link to="/membership/studentmembership" className="link-flex-box">
            <h3 className="link-flex-box-text">STUDENT<br />
            MEMBERSHIP</h3>
            <i className="fa fa-user-plus fa-5x" aria-hidden="true"></i>
        
            <p>Click to Register <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
        </Link>
      
        <Link to="/membership/externalmembership" className="link-flex-box">
            <h3 className="link-flex-box-text">EXTERNAL<br />
            MEMBERSHIP</h3>
            <i className="fa fa-user-plus fa-5x" aria-hidden="true"></i>
                
            <p>Click to Register <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
        </Link>
    </div>
  );
};

function Membership() {
    return (
        <div>
        <Hero />
        <Options />  
      </div>
    )
}
  
export default Membership;