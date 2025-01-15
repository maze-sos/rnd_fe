import React, { useEffect, useState } from 'react';
import '../Css/Lincoln.css';
import { API_ENDPOINT } from "./Config";

const Hero = () => {
  return (
    <div className="r-hero">
      <div className="r-hero-content">
        <h1>Student Projects</h1>
        <h3>Here is a List of Projects done by our students so far:</h3>
      </div>
    </div>
  );
};

const Areas = () => {
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(API_ENDPOINT + 'student_projects.php');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setProjects(result.data);
        } catch (error) {
          console.error('Error fetching project data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className='pareas'>
        {projects.map((project, index) => (
          <div key={index} className="h-project">
            <img src={API_ENDPOINT+`${project.image}`} alt={project.title} height="200px" width="200px" />
            <div className="h-project-details">
              <h1><strong>{project.title}</strong></h1>
              <p>{project.description}</p>
              <p style={{ color: 'rgb(220, 38, 38)' }}>Student Name: {project.student}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

function ProjectList() {
    return (
        <div>
        <Hero />
        <Areas />  
      </div>
    )
}
  
export default ProjectList;