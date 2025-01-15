import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Css/Register.css';
import { API_ENDPOINT } from './Config';

const ProjectUpload1 = () => {
  const [description, setDescription] = useState('');
  const [studentId, setStudentId] = useState('');
  const [document, setDocument] = useState(null);
  const [gitlink, setGitlink] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // State for success messages

  const handleFileChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fData = new FormData();
    fData.append('description', description);
    fData.append('studentid', studentId);
    fData.append('document', document);
    fData.append('gitlink', gitlink);

    try {
      const response = await axios.post(`${API_ENDPOINT}project_uploads.php`, fData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log(response.data); // Log API response
      if (response.data.success) { // Assuming API returns success flag
        setError(''); // Clear error message
        setSuccess('Upload was successful!'); // Set success message
        // Clear form inputs
        setDescription('');
        setStudentId('');
        setDocument(null);
        setGitlink('');
      } else {
        setError(response.data.message || 'Upload failed. Please check your inputs.');
        setSuccess(''); // Clear success message on failure
      }
    } catch (error) {
      console.error(error); // Log the error
      setError('An error occurred while submitting.');
      setSuccess(''); // Clear success message on error
    }
  };

  return (
    <div className="formbody">
      <div className="form-container">
        <h2>Project Upload</h2>
        <Link className="text-link button" style={{ marginBottom: 30 }} to="/projectdash">
          Back To Dashboard
        </Link>
        {error && <p style={{ color: 'red', margin: 15 }}>{error}</p>}
        {success && <p style={{ color: 'green', margin: 15 }}>{success}</p>} {/* Success message display */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="description">Project Information Description:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter Description"
              rows="10"
              cols="50"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentid">Student ID:</label>
            <input
              id="studentid"
              name="studentid"
              placeholder="Enter Your Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gitlink">Github Link:</label>
            <input
              id="gitlink"
              name="gitlink"
              placeholder="Enter Your Github Link"
              value={gitlink}
              onChange={(e) => setGitlink(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="document">Upload Documentation:</label>
            <input type="file" id="document" name="document" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <button type="submit" value="SEND" name="send" id="send">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectUpload1;
