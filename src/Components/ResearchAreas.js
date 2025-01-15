import React from 'react';
import '../Css/Lincoln.css';

const Hero = () => {
  return (
    <div className="r-hero">
      <div className="r-hero-content">
        <h1>RESEARCH AND DEVELOPMENT AREAS</h1>
        <h3>Our research spans a wide array of focus areas, including transformative initiatives in:</h3>
      </div>
    </div>
  );
};

const Areas = () => {
    return (
      <div className='area'>
          <div className="h-areas">
            <img src={require('./linclogo.png')} alt="logo" height="100px" width="100px"></img>
            <div className="h-areas-text">
              <h1><strong>Healthcare:</strong></h1>
              <p>Innovations to enhance medical treatments, healthcare systems, and public health initiatives.</p>
            </div>
          </div>
          <div className="h-areas">
            <img src={require('./linclogo.png')} alt="logo" height="100px" width="100px"></img>
            <div className="h-areas-text">
              <h1><strong>Agriculture:</strong></h1>
              <p>Sustainable practices, precision farming, and technology-driven solutions for agricultural challenges.</p>
            </div>
          </div>
          <div className="h-areas">
            <img src={require('./linclogo.png')} alt="logo" height="100px" width="100px"></img>
            <div className="h-areas-text">
              <h1><strong>Security:</strong></h1>
              <p>Research on cutting-edge security technologies and strategies to address contemporary threats.</p>
            </div>
          </div>
          <div className="h-areas">
            <img src={require('./linclogo.png')} alt="logo" height="100px" width="100px"></img>
            <div className="h-areas-text">
              <h1><strong>Environmental Business:</strong></h1>
              <p>Sustainable business practices, renewable energy, and environmental conservation.</p>            
            </div>
          </div>
          <div className="h-areas">
            <img src={require('./linclogo.png')} alt="logo" height="100px" width="100px"></img>
            <div className="h-areas-text">
              <h1><strong>Technology:</strong></h1>
              <p>Advancements in artificial intelligence, internet of things, and digital innovation.</p>            
            </div>
          </div>
          <div className="h-areas">
            <img src={require('./linclogo.png')} alt="logo" height="100px" width="100px"></img>
            <div className="h-areas-text">
              <h1><strong>Education:</strong></h1>
              <p>Research initiatives to enhance pedagogical methods, education technology, and learning outcomes.</p>            
            </div>
          </div>
      </div>
    );
  };

function ResearchAreas() {
    return (
        <div>
        <Hero />
        <Areas />  
      </div>
    )
}
  
export default ResearchAreas;