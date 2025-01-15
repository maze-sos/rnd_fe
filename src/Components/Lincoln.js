import React, { useState, useEffect } from 'react';
import '../Css/Lincoln.css';
import { API_ENDPOINT } from "./Config";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>RESEARCH AND DEVELOPMENT UNIT</h1>
        <h1>FOR</h1>
        <h1>Lincoln College and Lincoln University</h1>
        <h3>The Research and Development (R&D) Unit at Lincoln College and Lincoln University is the driving force behind our commitment to 
          academic excellence, innovation, and societal impact. Founded on the principles of rigorous inquiry and intellectual exploration, 
          our R&D Unit serves as the epicenter of cutting-edge research and transformative initiatives across diverse domains.</h3>
      </div>
    </div>
  );
};

const Missionvision = () => {
  return (
      <div className="mission">
        <div className="mission-text">
          <h1><strong>Mission</strong></h1>
          <p>To advance the frontiers of knowledge, foster interdisciplinary collaborations, and contribute to global progress by providing 
            a dynamic and innovative environment that empowers faculty and students to engage in impactful research across various disciplines.</p>
        </div>  
        <div className="mission-text">
          <h1><strong>Vision</strong></h1>
          <p>To be a globally recognized center of excellence in research, known for pioneering discoveries, innovative solutions, and a commitment 
            to addressing societal challenges through collaborative and interdisciplinary approaches.</p>
        </div>
      </div>
  );
};
  

const Pictures = () =>{
  return(
    <div className="pictures">
    <div className="sub-L">
            <div className="gal gal-1"></div>
            <div className="gal gal-2"></div>
      <div className="sub-R">
        <div className='double'>
          <div className="gal gal-4">
            <h1>Expertise</h1>
            <p>Our dedicated team of researchers, comprising seasoned faculty and motivated students, 
              brings diverse expertise across fields such as science, technology, management, and humanities. 
              Their collective knowledge forms the backbone of our research initiatives, ensuring a well-rounded 
              and comprehensive approach to complex problems.</p>
            <br></br>
            <br></br>
            <h1>Functionality</h1>
            <p>The R&D Unit functions as a dynamic hub for ideation, exploration, and innovation. It facilitates a 
              seamless integration of theoretical knowledge and practical application, providing resources and infrastructure 
              to support groundbreaking research endeavors.
              
            Additionally, the R&D Unit is mandated to facilitate projects that will financially empower students and staff.
            </p>
          </div>
        </div>
      </div> 
    </div>
   </div>
  )
}

const ProjectCardHead = () => {
  return (
  <div className="CardHead"> 
        <h1>Latest Student Projects</h1>
  </div>
  );
};

const ProjectPictures2 = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT + 'latest_student_projects.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const projectsWithUpdatedImageUrls = result.data.map(project => ({
          ...project,
          image: API_ENDPOINT+`${project.image}`
        }));
        setProjects(projectsWithUpdatedImageUrls);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, []);

  if (!Array.isArray(projects)) {
    return <h3 className='card-body'>No projects available</h3>;
  }

  return (
    <div className="project-pictures">
      {projects.map((project, index) => (
        <div key={index} className="p-sub-L">
          <img className="p-img" src={project.image} alt={project.title} />
          <h3 className="p-h3">{project.title}</h3>
          <p className="p-p">by {project.student}</p>
        </div>
      ))}
    </div>
  );
};

const CardHead = () => {
  return (
  <div className="CardHead"> 
        <h1>Gallery</h1>
  </div>
  );
};

const Pictures2 = () =>{
  return(
   <div className="pictures">
      <div className="sub-L">
              <div className="gal gal-3"></div>
              <div className="gal gal-5"></div>
              <div className="gal gal-6"></div>
              <div className="gal gal-7"></div>
      </div>
    </div>
  )
}

const CardHead2 = () => {
  return (
  <div className="CardHead2"> 
        <h1 className='card-head'>Collaboration</h1>
        <h3 className='card-body'>We actively seek collaborations with industry partners, governmental agencies, and international institutions to enrich our research 
          ecosystem. Through strategic partnerships, we aim to amplify the impact of our research, fostering real-world applications and 
          addressing global challenges.</h3>
  </div>
  );
};

  const Services = () =>{
    return(
        <div class="l-flex-container">
        <div class="l-flex-box">
            <h3 className='card-cards'>NITDA</h3>        
        </div>
        <div class="l-flex-box">
            <h3 className='card-cards'>NGOs</h3>
        </div>
        <div class="l-flex-box">
            <h3 className='card-cards'>BOI</h3>
        </div>
        <div class="l-flex-box">
            <h3 className='card-cards'>NSEL</h3>
        </div>
        </div>
    )
  }
  const About = () => {
    return (
        <div className="about">
          <img src={require('./linclogo.png')} alt="logo" height="400px" width="400px"></img>
          <div className="about-text">
            <h1><strong>About The Research and Development (R&D) Unit </strong></h1>
            <p>In the dynamic realm of higher education, innovation serves as the heartbeat of progress. 
              At Lincoln University and Lincoln College, we take pride in pushing the boundaries of knowledge and charting new territories of 
              discovery. Our Research and Development Unit stands at the forefront of this intellectual frontier, a dynamic powerhouse dedicated 
              to shaping the future of education, fostering groundbreaking research, and propelling our institutions into the vanguard of global 
              academic excellence.</p>

            <p>With an unwavering commitment to curiosity and exploration, the Research and Development Unit at Lincoln is not merely a department; 
              it's an incubator of ideas, a crucible of innovation, and a catalyst for transformative change. In this introduction, we invite you to 
              delve into the vibrant world of our research endeavors, where cutting-edge projects, interdisciplinary collaborations, and a spirit of 
              relentless inquiry converge to redefine the landscape of knowledge creation.</p>

            <p>Join us on this exhilarating journey as we unveil the ethos, objectives, and remarkable contributions of the Research and Development 
              Unit at Lincoln University and Lincoln College, where the pursuit of knowledge knows no bounds, and the future is shaped by the tenacity 
              of intellectual exploration.</p>
          </div>
        </div>
    );
  };

function Lincoln() {
    return (
        <div>
        <Hero />
        <Missionvision />
        <Pictures />
        <ProjectCardHead />
        <ProjectPictures2 />
        <CardHead />
        <Pictures2 />
        <CardHead2 />
        <Services />   
        <About />   
      </div>
    )
}
  
export default Lincoln;