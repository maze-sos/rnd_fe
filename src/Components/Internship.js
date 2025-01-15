import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Lincoln.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>RESEARCH AND DEVELOPMENT INTERNSHIP</h1>
      </div>
    </div>
  );
};

const Options = () => {
  return (
    <div className="flex-container">
        <Link to="/internship/internalinternship" className="link-flex-box">
            <h3 className="link-flex-box-text">INTERNAL<br />
            INTERNSHIP</h3>
            <i className="fa fa-user-plus fa-5x" aria-hidden="true"></i>
        
            <p>Click to Register <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
        </Link>
      
        <Link to="/internship/externalinternship" className="link-flex-box">
            <h3 className="link-flex-box-text">EXTERNAL<br />
            INTERNSHIP</h3>
            <i className="fa fa-user-plus fa-5x" aria-hidden="true"></i>
                
            <p>Click to Register <i className="fa fa-arrow-right" aria-hidden="true"></i></p>
        </Link>
    </div>
  );
};

function Internship() {
    return (
        <div>
        <Hero />
        <Options />  
      </div>
    )
}
  
export default Internship;