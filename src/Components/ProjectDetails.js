import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Css/ProjectDetails.css';
import { API_ENDPOINT } from "./Config";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch (API_ENDPOINT + `project_details.php?id=${id}`);
        const result = await response.json();

        if (result.success) {
          setProject(result.data);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>    
    <div className="project-details">
      <div className="project-details-header">
        <h2>{project.title}</h2>
        <p>Author: {project.author}</p>
        <p>Created At: {project.created_at}</p>
        <Link className="text-link button" to="/projectdash">
        Back To Dashboard
        </Link>
      </div>
      <div className="project-details-content">
        <p>{project.description}</p>
      </div>
    </div></>

  );
}

export default ProjectDetails;
