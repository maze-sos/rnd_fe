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


const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={API_ENDPOINT + project.image} alt={project.title} className="modal-image" style={{ margin: "auto" }} />
        <div className='project-details'>
          <div className="project-details-header" style={{ textAlign: "left" }}>
            <h1><strong>{project.title}</strong></h1>
            <p style={{ color: 'rgb(220, 38, 38)' }}>Student Name: {project.student}</p>
            <div className="form-group">
              <a
                href={API_ENDPOINT + project.document}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Download
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Link
              </a>
            </div>
          </div>
          <div className="project-details-content" style={{ textAlign: "left", marginTop: "10px" }}>
            <p style={{ textDecoration: "underline"}}><strong>Abstract</strong></p>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );

};


const Areas = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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
        <div key={index} className="h-project" onClick={() => setSelectedProject(project)}>
          <img  src={API_ENDPOINT + project.image} alt={project.title} />
          <div className="h-project-details">
            <h1><strong>{project.title}</strong></h1>
            <p>{project.description}</p>
            <strong><p style={{ font: 'bold' }}>Student Name: {project.student}</p></strong>
          </div>
        </div>
      ))}
      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

function ProjectList() {
  return (
    <div>
      <Hero />
      <Areas />  
    </div>
  );
}

export default ProjectList;
