import React, { useState } from 'react';
import '../Css/Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_ENDPOINT } from "./Config";

const StudentProject = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [student, setStudent] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async () => {
        const url = API_ENDPOINT + "admin_student_projects.php";

        let fData = new FormData();
        fData.append("title", title);
        fData.append("description", description);
        fData.append("student", student);
        if (image) {
            fData.append("image", image);
        }

        try {
            const response = await axios.post(url, fData);
            setSuccess(response.data.message || 'Submission successful.');
            setError('');

            // Clear form fields after successful submission
            setTitle('');
            setDescription('');
            setStudent('');
            setImage(null);
            document.getElementById("image").value = ""; // Clear file input
        } catch (error) {
            console.error(error);
            setError('An error occurred while submitting.');
            setSuccess('');
        }
    }

    return (
        <div className="formbody">
            <div className="form-container">
                <h2>Student Project Form</h2>
                <Link className="text-link button" to="/admindash">
                    Back To Dashboard
                </Link>
                {error && <p style={{ color: 'red', margin: 15 }}>{error}</p>}
                {success && <p style={{ color: 'green', margin: 15 }}>{success}</p>}
                <form className='projectform'>
                    <div className="form-group">
                        <label htmlFor="title">Project Title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter Project Title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Project Description:</label>
                        <input type="text" id="description" name="description" placeholder="Enter Project Description" required value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="student">Student Name:</label>
                        <input type="text" id="student" name="student" placeholder="Enter Student Name" required value={student} onChange={(e) => setStudent(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Upload Picture:</label>
                        <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="form-group">
                        <button type="button" value="SEND" name="send" id="send" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentProject;
